//  start writing your code from here

const { Router } = require('express');
const router = Router();

router.get('/get-todo', (req, res)=> {
    res.send("Hello from todo/get-todo route");
})

module.exports = router;