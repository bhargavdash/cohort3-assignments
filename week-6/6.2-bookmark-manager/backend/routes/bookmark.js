const { Router } = require('express')
const { z } = require('zod');
const { Bookmark } = require('../db/db');
const authMiddleware = require('../auth/authMiddleware');


const router = Router();

router.get('/healthy', (req, res)=> {
    res.send('Bookmark route is healthy!!');
})

router.post('/add', authMiddleware, async (req, res) => {
    const requiredBody = z.object({
        url: z.string(),
        category: z.string()
    })

    const {success, error} = requiredBody.safeParse(req.body);

    if(!success){
        return res.status(400).json({error: error});
    }

    try{
        const url = req.body.url;
        const category = req.body.category;
        const userId = req.userId;

        const bookmark = await Bookmark.create({
            url: url,
            category: category,
            userId: userId
        })

        if(!bookmark){
            return res.status(400).json({error: "Bookmark not created"});
        }

        res.status(200).json({message: "Bookmark created successfully", bookmark: bookmark});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});

router.get('/getAll', authMiddleware, async (req, res) => {
    try{
        const userId = req.userId;

        const bookmarks = await Bookmark.find({
            userId: userId
        })

        if(!bookmarks){
            return res.status(400).json("Bookmarks can't be fetched");
        }
        res.status(200).json({message: "Bookmarks fetched!!", bookmarks: bookmarks});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});

router.get('/get/:id', authMiddleware, async (req, res) =>{
    try{
        const bookmarkId = req.params.id;

        const bookmark = await Bookmark.findOne({
            _id: bookmarkId
        });

        if(!bookmark){
            return res.status(400).json({error: "Bookmark can't be fetched"});
        }
        res.status(200).json({message: "Bookmark fetched!!", bookmark: bookmark});
    } catch(err){
        console.log(err);
        res.status(400).json({error: err});
    }
});

router.delete('/delete/:id',authMiddleware, async(req, res)=>{
    try{
        const bookmarkId = req.params.id;

        const deletedBookmark = await Bookmark.findByIdAndDelete(bookmarkId);

        if(!deletedBookmark){
            return res.status(400).json({error: "Delete unsuccessful"});
        }
        res.status(200).json("Bookmark deleted!!");
    } catch(err){
        console.log(err);
        return res.status(400).json({error: err});
    }
});

module.exports = router;