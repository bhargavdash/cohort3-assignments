//  start writing your code from here

const { Router } = require('express');
const router = Router();
const authMiddleware = require('../middleware/user');
const { Todo } = require('../db/index');
const { z } = require('zod');

router.get('/healthy', (req, res)=> {
    res.send("Hello from todos");
})


// add create todo endpoint
router.post('/create', authMiddleware, async(req, res) =>{
    // add input validation
    const requiredBody = z.object({
        title: z.string(),
        isDone: z.boolean(),
        timestamp: z.string()
    });

    const {success, error} = requiredBody.safeParse(req.body);
    if(!success){
        // validation failed
        return res.status(400).json({error: error});
    }

    // input validated
    try{
        // get the current userId , it was written by auth middleware
        const userId = req.userId;
        // get todo details from input
        const title = req.body.title;
        const isDone = req.body.isDone;
        const timestamp = req.body.timestamp;

        // create a new todd
        const todo = await Todo.create({
            title: title,
            isDone: isDone,
            timestamp: timestamp,
            userId: userId
        });
        if(!todo){
            // todo not created 
            return res.status(400).json({error: "Todo creation failed"});
        }
        // todo created
        res.status(200).json({message: "Todo created !!", todo: todo});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});

// add get all todos endpoint 
router.get('/get', authMiddleware, async(req, res) =>{
    // search all todos by userId and return it to user
    try{
        const userId = req.userId;
        const todos = await Todo.find({
            userId: userId
        });

        if(!todos){
            // todos not fetched
            return res.status(400).json({error: "Todos can't be fetched"});
        }
        // return the todos to the user
        res.status(201).json({message: "Todos fetched !!", todos: todos});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});

// add get todo by id endpoint
router.get('/get/:id', authMiddleware, async(req, res) =>{
    try{
        const todoId = req.params.id;
        const todos = await Todo.findOne({
            _id: todoId
        });

        if(!todos){
            // todos not fetched
            return res.status(400).json({error: "Todo can't be fetched"});
        }
        // return the todos to the user
        res.status(201).json({message: "Todo fetched !!", todos: todos});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});

// add update todo endpoint
router.put('/update/:id', authMiddleware, async(req, res) =>{
    // input validation 
    const requestBody = z.object({
        title: z.string(),
        isDone: z.boolean(),
        timestamp: z.string()
    })

    const {success, error} = requestBody.safeParse(req.body);
    if(!success){
        // validation failed
        return res.status(400).json({error: error});
    }

    // input validated
    try{
        const todoId = req.params.id;
        const title = req.body.title;
        const isDone = req.body.isDone;
        const timestamp = req.body.timestamp;

        const updatedTodo = await Todo.findByIdAndUpdate(todoId, {
            title: title,
            isDone: isDone,
            timestamp: timestamp
        });

        if(!updatedTodo){
            // todo not updated
            return res.status(400).json({error: "Todo not updated"});
        }
        // todo updated
        res.status(201).json({message: "Todo updated!!", updatedTodo: updatedTodo});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});

// add delete todo endpoint
router.delete('/delete/:id', authMiddleware, async(req, res) =>{
    try{
        const todoId = req.params.id;

        const deletedTodo = await Todo.findByIdAndDelete(todoId);

        if(!deletedTodo){
            // todo deletion failed
            return res.status(400).json({error: "Todo deletion failed"});
        }

        res.status(200).json({message: "Todo deleted!!"});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});


module.exports = router;