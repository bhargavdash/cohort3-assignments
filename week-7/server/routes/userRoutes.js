const Router = require('express');
const router = Router();
const { z } = require('zod');
const { User, Course } = require('../database/db');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');
dotenv.config();
const userAuthMiddleware = require('../auth/user-auth');
const jwt = require('jsonwebtoken');
const jwt_secret = process.env.JWT_SECRET

router.get("/healthy", (req, res)=>{
    res.send("User route is healthy");
})

// User routes
router.post('/signup', async(req, res) => {
    // logic to sign up user
    const requiredBody = z.object({
        username: z.string().email(),
        password: z.string().refine((value) => {
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
            password: hashedPassword,
            courses: []
        })

        if(!user){
            return res.status(400).json({error: "Cannot create user"});
        }
        res.status(200).json({message: "User created!!"});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});

router.post('/login', async(req, res) => {
    // logic to log in user
    const requiredBody = z.object({
        username: z.string().email(),
        password: z.string().refine((value) => {
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
    try {
        const username = req.body.username;
        const password = req.body.password;

        const user = await User.findOne({
            username: username
        })
        
        if(!user){
            return res.status(400).json({error: "user does not exist"});
        }

        const matchedPassword = await bcrypt.compare(password, user.password);

        if(!matchedPassword){
            return res.status(400).json({error: "Incorrect password"});
        }
        const token = jwt.sign({
            userId: user._id
        }, jwt_secret);

        res.status(200).json({message: "Login successful", token: token});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});

router.get('/courses', userAuthMiddleware, async(req, res) => {
    // logic to list all courses
    try{
        const courses = await Course.find({});

        if(!courses){
            return res.status(400).json({error: "Cannot fetch courses"});
        }
        res.status(200).json({message: "Courses fetched", courses: courses});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }

});

router.post('/courses/:courseId', userAuthMiddleware,  async(req, res) => {
    // logic to purchase a course
    try{
        const courseId = req.params.courseId;
        const userId = req.userId;

        const user = await User.findById(userId);
        if(!user){
            return res.status(400).json({error: "Cannot purchase course. User not found"});
        }

        if(user.courses.includes(courseId)){
            return res.status(400).json({error: "Course already purchased"});
        }
        user.courses.push(courseId);
        await user.save();

        // const user = await User.findByIdAndUpdate(userId, 
        //     {$addToSet: {courses: courseId}},
        //     {new: true, useFindAndModify: false}
        // )
        // if(!user){
        //     return res.status(400).json({error: "Cannot purchase course. User not found"});
        // }
        res.status(200).json({message: "Course added to user", user: user});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});

router.get('/purchasedCourses', userAuthMiddleware, async(req, res) => {
    // logic to view purchased courses
    try{
        const userId = req.userId;
        const user = await User.findOne({
            _id: userId
        })
        if(!user){
            return res.status(400).json({error: "Cannot fetch purchases courses"});
        }
        res.status(200).json({message:"Fetched purchased courses", 
            purchasedCourses: user.courses})
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});



module.exports = router;

