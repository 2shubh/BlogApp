const express=require('express');
const router=express.Router();

const {createComment}=require("../controllers/commentContoller");
const { getAllPost,createPost } = require('../controllers/postController');
const {likePost,unlikePost}=require("../controllers/likeController");

router.post("/comments/create",createComment);
router.post("/posts/create",createPost);
router.get("/posts",getAllPost)
router.post("/likes/like",likePost);
router.delete("/likes/unlike",unlikePost);

module.exports=router;

