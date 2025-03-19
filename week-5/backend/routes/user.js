//  start writing your code from here

const { Router } = require('express');
const router = Router();
const { z } = require('zod');
const { User } = require('../db/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// create signup and signin endpoints

router.get("/healthy", (req,res)=>{
    res.send("hello from user");
})

router.post('/signup', async (req, res) =>{
    // create input validation using zod
    const requiredBody = z.object({
        username: z.string().email().min(5).max(15),
        password: z.string().min(5).max(15).refine((value) =>{
            return /[A-Z]/.test(value) && // atleast one uppercase
                   /[a-z]/.test(value) && // atleast one lowercase
                   /[0-9]/.test(value) && // atleast one digit
                   /[!@#$%^&*(),./":{}|<>]/.test(value); // atleast one special character
        })
    })

    const {success, error} = requiredBody.safeParse(req.body);
    if(!success){
        // validation failed
        return res.status(400).json({error: error});
    }
    // input validation complete
    try{
        const username = req.body.username; // this is unique , constraint added in db schema
        const password = req.body.password;
        
        // hash the password before storing using bcrypt
        const hashedPassword = await bcrypt.hash(password, 5); // 5 is the no of iterations salt is added

        const user = await User.create({
            username: username,
            password: hashedPassword
        })

        if(!user){
            // user creation failed in db
            return res.status(500).json({error: "User creating failed"});
        }
        // user created 
        res.status(200).json({message: "User created successfully", user: user});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});


// write signin endpoint
router.post('/signin', async(req, res) =>{
    // add input validation using zod
    const requiredBody = z.object({
        username : z.string().email().min(5).max(15),
        password: z.string().min(5).max(15).refine((value) => {
            return /[A-Z]/.test(value) && // 1 upper case
                   /[a-z]/.test(value) && // 1 lower case
                   /[0-9]/.test(value) && // 1 digit
                   /[!@#$%^&*(),./":{}|<>]/.test(value); // 1 special char
        })
    })

    const {success, error} = requiredBody.safeParse(req.body);
    if(!success){
        // validation failed
        return res.status(400).json({error: error});
    }
    // input validated
    try{
        const username = req.body.username;
        const password = req.body.password;

        // check if user exists in db
        const user = await User.findOne({
            username: username
        })
        if(!user){
            // user does not exist
            return res.status(400).json({error: "User does not exist"});
        }
        // user found , match password
        const matchedPassword = await bcrypt.compare(password, user.password);
        if(!matchedPassword){
            // incorrect password
            return res.status(400).json({error: "Incorrect password"});
        }
        // correct password, generate jwt token and send it
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);

        res.status(201).json({message: "Sign in successful", token: token});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});


module.exports = router;