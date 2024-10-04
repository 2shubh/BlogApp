const Post=require("../model/postmodel");

exports.createPost = async(req,res)=>{
    try{
        const {title,body}=req.body;

        const post=new Post({
            title,body
        })
        const savedPost=await post.save();
        res.json({
            data:savedPost
        })
        
    }
    catch(err){
        console.log(err);
        res.status(200).json({
            success:false,
            message:"Error occured",
        })

    }
}
exports.getAllPost=async (req,res)=>{
    try{
       
        const posts=await Post.find().populate("likes").populate("comments").exec();
        res.json({
            posts,
        })

    }
    catch(error){
        return res.status(400).json({
            message:"Error Occured while fetching all posts"
        })

    }
}