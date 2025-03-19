//  start writing your code from here

const { Router } = require('express');
const router = Router();
const { auth } = require('../middleware/user');
const app = express();


router.get('/healthy', (req, res)=> {
    res.send("Hello from todos");
})

app.use(auth);

// add create todo endpoint
router.post('/create', async(req, res) =>{

});

// add get all todos endpoint 
router.get('/get', async(req, res) =>{

});

// add get todo by id endpoint
router.get('/get/:id', async(req, res) =>{

});

// add update todo endpoint
router.put('/update/:id', async(req, res) =>{

});

// add delete todo endpoint
router.delete('/delete/:id', async(req, res) =>{

});



module.exports = router;