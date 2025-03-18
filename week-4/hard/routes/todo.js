const { Router } = require("express");
const adminMiddleware = require("../middleware/user");
const router = Router();
const { z } = require('zod');
const { Todo } = require('../database/index');
 
// todo Routes
router.post('/', adminMiddleware, async (req, res) => {
    // Implement todo creation logic
    const userId = req.userId;
    // input validation
    const requestBody = z.object({
        title: z.string(),
        isDone: z.boolean(),
        timeStamp: z.string(),
    });

    const {success, error} = requestBody.safeParse(req.body);

    if(!success){
        return res.status(400).json({error: error});
    }

    const title =  req.body.title;
    const isDone = req.body.isDone;
    const timeStamp = req.body.timeStamp;
    try{
        const todo = await Todo.create({
            title: title,
            isDone: isDone,
            timeStamp: timeStamp,
            userId: userId
        })

        if(!todo){
            return res.status(500).json({message: "Todo creation failed"});
        }
        res.status(200).json({message: "Todo created !!", todo: todo});
    } catch(err){
        console.log(err);
        return res.status(400).json({error: err});
    } finally {
        console.log("Post todo step complete");
    }
});

router.put('/', adminMiddleware, async (req, res) => {
    // Implement update todo  logic
    const todoId = req.body.id;
    const title = req.body.title;
    const isDone = req.body.isDone;
    const timeStamp = req.body.timeStamp;
    try{
        // find the todo in db
        console.log(todoId);
        const updatedTodo = await Todo.findByIdAndUpdate(todoId, {
            title: title,
            isDone: isDone,
            timeStamp: timeStamp
        })

        if(!updatedTodo){
            return res.status(400).json({error: "No todo found with given id"});
        }

        res.status(200).json({message: "Todo updated !!", todo: updatedTodo});
    } catch(err){
        console.log(err);
        return res.status(400).json({error: err});
    } finally {
        console.log("Update todo step completed");
    }
    
});

router.delete('/', adminMiddleware, (req, res) => {
    // Implement delete todo logic
});

router.delete('/:id', adminMiddleware, async (req, res) => {
    // Implement delete todo by id logic
    const todoId = req.params.id;

    try{
        // find that todo and delete
        const deletedTodo = await Todo.findByIdAndDelete(todoId);
        if(!deletedTodo){
            return res.status(400).json({error: "Todo not found"});
        }
        res.status(200).json({message: "Todo deleted!!"});
    } catch(err){
        console.log(err);
        return res.status(400).json({error: err});
    } finally {
        console.log("Delete todo completed");
    }
});



router.get('/', adminMiddleware, async (req, res) => {
    // Implement fetching all todo logic
    
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

router.get('/:id', adminMiddleware, async (req, res) => {
    // Implement fetching todo by id logic
    const todoId = req.params.id;
    try{
        const todo = await Todo.findById(todoId);
        if(!todo){
            return res.status(400).json({error: "Todo not found"});
        }
        res.status(200).json({message: "Todo fetched", todo: todo});
    } catch(err){
        console.log(err);
        return res.status(400).json({error: err});
    }
});

module.exports = router;