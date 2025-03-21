const { Router } = require('express');
const { z } = require('zod');
const { User } = require('../db/db');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();
JWT_TOKEN = process.env.JWT_TOKEN;

const router = Router();

router.get('/healthy', (req, res)=> {
    res.send('User route is healthy!!');
})

router.post('/signup', async (req, res)=>{
    const requiredBody = z.object({
        username: z.string().email(),
        password: z.string().refine((value) =>{
            return /[A-Z]/.test(value) &&
                   /[a-z]/.test(value) &&
                   /[0-9]/.test(value) &&
                   /[!@#$%^&*()]/.test(value);
        })
    })

    const {success, error} = requiredBody.safeParse(req.body);
    if(!success){
        return res.status(400).json({error: error});
    }

    try{
        const username = req.body.username;
        const password = req.body.password;

        const hashedPassword = await bcrypt.hash(password, 5);
        const user = await User.create({
            username: username,
            password: hashedPassword
        });

        if(!user){
            return res.status(400).json({error: "Signup failed"});
        }
        res.status(200).json({message: "User created!!", user: user});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});

router.post('/signin', async(req, res) =>{
    const requiredBody = z.object({
        username: z.string().email(),
        password: z.string().refine((value) =>{
            return /[A-Z]/.test(value) &&
                   /[a-z]/.test(value) && 
                   /[0-9]/.test(value) &&
                   /[!@#$%^&*()]/.test(value);
        })
    })

    const {success, error} = requiredBody.safeParse(req.body);

    if(!success){
        return res.status(400).json({error: error});
    }

    try{
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.findOne({
            username: username
        });

        if(!user){
            return res.status(400).json({error: "User not found"});
        }

        const matchedPassword = await bcrypt.compare(password, user.password);

        if(!matchedPassword){
            return res.status(400).json({error: "Invalid password"});
        }

        const token = jwt.sign({
            userId: user._id
        }, JWT_TOKEN);

        res.status(200).json({message: "SignIn Successful", token: token});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});      


module.exports = router;