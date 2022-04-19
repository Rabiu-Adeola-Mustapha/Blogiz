const postRouter = require("express").Router();
const {
  deletePost,
  getAllPost,
  getSinglePost,
  updatePost,
  createPost,
} = require("../controllers/postCntrl");

postRouter.route("/").get(getAllPost).post(createPost);

postRouter.route("/:postId").get(getSinglePost).delete(deletePost).patch(updatePost)

// postRouter.get("/", getAllPost );
// postRouter.post("/", createPost);
// postRouter.get("/:postId", getSinglePost)




module.exports = postRouter;
