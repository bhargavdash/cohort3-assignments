const { Router } = require("express");
const { z } = require('zod');
const router = Router();
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

const userMiddleware = require("../middleware/user");

const { User, Todo } = require('../database/index');


// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    // add input validation using zod
    const requiredBody = z.object({
        email: z.string().email(),
        password: z.string().min(5).max(15),
        name: z.string().min(5).max(20)
    })

    const {success, data, error} = requiredBody.safeParse(req.body);
    // if validation fails, return 
    if(!success){
        return res.status(400).json({error: error});
    }
    // else extract user details
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    try{
        // hash the user's password
        const hashedPassword = await bcrypt.hash(password, 5);

        // add user to the db
        const newUser = await User.create({
            email: email,
            password: hashedPassword,
            name: name
        });
        
        // send response that user created successfully
        res.status(200).json({message: "User created successfully", User: newUser});
    } catch(err){
        console.log(err);
        return res.status(400).json({error: err});
    } finally{
        console.log("Signup step completed");
    }
});

router.post('/login', async (req, res) => {
    // Implement user login logic
    
    // add input validation using zod
    const requiredBody = z.object({
        email: z.string().email(),
        password: z.string().min(5).max(15)
    })

    const {success, data, error} = requiredBody.safeParse(req.body);
    // if validation fails, return 
    if(!success){
        return res.status(400).json({error: error});
    }

    // else extract info from body
    const email = req.body.email;
    const password = req.body.password;

    try{
        // check if user is there in db
        const user = await User.findOne({
            email: email
        })
        
        if(!user){
            // user does not exist
            return res.status(400).json({error: "User does not exist"});
        }
        // user found, now check password
        const isValid = await bcrypt.compare(password, user.password);
        if(!isValid){
            // wrong password
            return res.status(400).json({error: "Invalid password"});
        }
        console.log("My jwt secret is: ", JWT_SECRET);
        // password is valid , generate jwt token and send it to user
        const token = jwt.sign({
            id : user._id
        }, JWT_SECRET);

        res.status(201).json({message: "SignIn successful", token: token});
    } catch(err){
        console.log(err);
        return res.status(400).json({error: err});
    } finally {
        console.log("SignIn step completed");
    }

});

router.get('/todos', userMiddleware, async (req, res) => {
    // Implement logic for getting todos for a user

    // extract userId from req that was written by middleware
    const userId = req.userId;

    try{
        // find the userId in todos
        const todos = await Todo.find({
            userId: userId
        })
        if(!todos){
           return res.status(200).json({message: "Error fetching todo"});
        }
        res.status(200).json({message: "Todos found successfully", todos: todos});
    } catch(err){
        console.log(err);
        return res.status(400).json({error: err});
    } finally {
        console.log("Todos route completed");
    }

});

router.post('/logout', userMiddleware, (req, res) => {
    // Implement logout logic
});

module.exports = router