const Router = require('express');
const router = Router();
const { Admin, Course } = require('../database/db');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const adminAuthMiddleware = require('../auth/admin-auth');

const jwt_secret = process.env.JWT_SECRET;

const { z } = require('zod');

router.get("/healthy", (req, res)=>{
    res.send("Admin route is healthy");
})

// Admin routes
router.post('/signup', async(req, res) => {
    // logic to sign up admin
    const requiredBody = z.object({
        username: z.string(),
        password: z.string()
    })

    const {success, error} = requiredBody.safeParse(req.body);
    if(!success){
        return res.status(400).json({error: error});
    }

    try{
        const username = req.body.username;
        const password = req.body.password;

        if(username != "admin"){
            return res.status(400).json({error: "Cannot create another admin"});
        }

        const hashedPassword = await bcrypt.hash(password, 5);

        const admin = await Admin.create({
            username: username,
            password: hashedPassword
        })

        if(!admin){
            return res.status(400).json({message: "Cannot create admin"})
        }
        res.status(200).json({message: "Admin created!!"});
        
    } catch(err){
        console.log(err);
        res.status(400).json({error: error});
    }
});

router.post('/login', async(req, res) => {
    // logic to log in admin
    const requiredBody = z.object({
        username: z.string(),
        password: z.string()
    })

    const {success, error} = requiredBody.safeParse(req.body);
    if(!success){
        return res.status(400).json({error: error});
    }

    try{
        const username = req.body.username;
        const password = req.body.password;

        const admin = await Admin.findOne({
            username: username
        })

        if(!admin){
            return res.status(400).json({error: "Admin doesn't exist"});
        }

        const matchedPassword = await bcrypt.compare(password, admin.password);

        if(!matchedPassword){
            return res.status(400).json({error: "Incorrect Password"});
        }

        const token = jwt.sign({
            adminId: admin._id
        }, jwt_secret);

        res.status(200).json({message: "Admin logged in", token: token});

    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});

router.post('/courses',adminAuthMiddleware, async(req, res) => {
    // logic to create a course
    const requiredBody = z.object({
        title: z.string(),
        description: z.string(),
        price: z.number(),
        imageLink: z.string(),
        published: z.boolean(),
    })

    const {success, error} = requiredBody.safeParse(req.body);
    if(!success){
        return res.status(400).json({error: error});
    }

    try{
        const adminId = req.adminId;
        const {title, description, price, imageLink, published} = req.body;

        const course = await Course.create({
            title: title,
            description: description,
            price: price,
            imageLink: imageLink,
            published: published,
            adminId: adminId
        })

        if(!course){
            return res.status(400).json({error: "Cannot create course"});
        }

        res.status(200).json({message: "Course created!!", course: course});

    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }

});

router.put('/courses/:courseId', adminAuthMiddleware,  async(req, res) => {
    // logic to edit a course
    const requiredBody = z.object({
        title: z.string(),
        description: z.string(),
        price: z.number(),
        imageLink: z.string(),
        published: z.boolean()
    })

    const {success, error} = requiredBody.safeParse(req.body);
    if(!success){
        return res.status(400).json({error: error});
    }

    try{
        const adminId = req.adminId;
        const courseId = req.params.courseId;
        const {title, description, price, imageLink, published} = req.body;

        const updatedCourse = await Course.findByIdAndUpdate(courseId, {
            title: title,
            description: description,
            price: price,
            imageLink: imageLink,
            published: published,
            adminId: adminId
        }, {new: true})
        if(!updatedCourse){
            return res.status(400).json({error: "Cannot update course"});
        }
        res.status(200).json({message: "Course updated!!", updatedCourse: updatedCourse});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});

router.get('/courses', adminAuthMiddleware,  async(req, res) => {
    // logic to get all courses
    try{
        const adminId = req.adminId;
        const courses = await Course.find({
            adminId: adminId
        })
        if(!courses){
            return res.status(400).json({error: "Cannot get courses"});
        }
        res.status(200).json({message: "Courses fetched!!", courses: courses});

    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});

module.exports = router;