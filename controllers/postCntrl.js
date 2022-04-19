const Post = require("../models/postModel");
const { post } = require("../routes/postRoutes");

const getAllPost = async (req, res) => {
  try {
         const posts = await Post.find();
          res.status(200).json(posts)

  } catch (error) {}
};
const getSinglePost = async (req, res) => {
  try {

         const postId = req.params.postId;
         const post = await Post.findById(postId);
         res.status(200).json(post);
  
  } catch (error) {}
};
const createPost = async (req, res) => {
  try {

      const post = await Post.create(req.body);
      res.status(201).json(post);
    
  } catch (error) {}
};
const updatePost = async (req, res) => {
  try {
        
         const postId = req.params.postId;
         let post = await Post.findById(postId);

         if(!post){
             return res.status(404).json({msg: "Post Not Found"})
         }
          post = await Post.findByIdAndUpdate(postId, req.body, {new:true})
          res.status(200).json(post)
  } catch (error) {}
};
const deletePost = async (req, res) => {
  try { 

       const postId = req.params.postId;
       let post = await Post.findById(postId)
       if(!post) {
           return res.status(400).json({msg:"Post Not Found"})
       };
       await Post.findByIdAndDelete(postId);
       res.status(200).json({msg: "Post Deleted"});

    res.send("Delete Post");
  } catch (error) {}
};

module.exports = {
  getAllPost,
  getSinglePost,
  updatePost,
  deletePost,
  createPost,
};
