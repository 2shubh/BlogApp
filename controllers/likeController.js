const Like=require("../model/likemodel");
const Post=require("../model/postmodel");

exports.likePost=async (req,res)=>{
    try{
        const {post,user}=req.body;
        const Likes=new Like({
            post,user
        });
        const liked=await Likes.save();

        const updatedPost=await Post.findByIdAndUpdate(post,{$push :{likes:liked._id}},{new:true})
        .populate("likes")
        .exec()

        res.json({
            post:updatedPost
        })

    }
    catch(error){

        res.status(500).json({
            message:"Error Occured While Liking Post"
        })
    }
}
exports.unlikePost=async (req,res)=>{
    try{
        const {post,like}=req.body;
        const deletedLike=await Like.findOneAndDelete({post:post,_id:like});

        const updatedPost=await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id} },{new:true})

        res.json({
            post:updatedPost
        })

    }
    catch(error){
        res.status(500).json({
            message:"Error Occured While Liking Post"
        })

    }
}