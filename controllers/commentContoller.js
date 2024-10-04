const Comment=require("../model/commentmodel");
const Post = require("../model/postmodel");

exports.createComment=async (req,res)=>{
    try{
        const {post,user,body}=req.body;

        const comment=new Comment({
            post,user,body
        })
          const savedComment=await comment.save();

          //Now comment should be added in post also
          //so fetching post by id and updating it
          const updatedPost=await Post.findByIdAndUpdate(post, {$push:{comments:savedComment._id}},{new:true})
           .populate("comments")
           .exec()

           res.json({
            post:updatedPost
           })
    }
    catch(err){
       return res.status(500).json({
            success:false,
            message:"Error",
        })

    }
}