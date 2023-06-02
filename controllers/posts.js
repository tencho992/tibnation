const cloudinary = require("../middleware/cloudinary");
const Post = require("../models/Post");
const ObjectId = require('mongodb').ObjectID
const Comments = require("../models/Comments");
const Users = require("../models/User");

module.exports = {
  getProfile: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("profile.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  getSettings: async (req, res) => {
    try {
      const posts = await Post.find({ user: req.user.id });
      res.render("accountInfo.ejs", { posts: posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  },
  /////////////////////////////boilerplate//////////////////////////////////
  getFeed: async (req, res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      res.render("feed.ejs", { posts: posts });
    } catch (err) {
      console.log(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const post = await Post.findById(req.params.id);
      const comments = await Comments.find({postid: ObjectId(req.params.id) })
      //console.log(comments)
      res.render("post.ejs", { post: post, user: req.user, comments: comments });
    } catch (err) {
      console.log(err);
    }
  },
  createPost: async (req, res) => {
    try {
      // Upload image to cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);

      const post = await Post.create({
        image: result.secure_url,
        cloudinaryId: result.public_id,
      });
      console.log(post)
      console.log("Post has been added!");
      res.redirect("/courseDetails");
    } catch (err) {
      console.log(err);
    }
  },
  likePost: async (req, res) => {
    try {
      await Post.findOneAndUpdate(
        { _id: req.params.id },
        {
          $inc: { likes: +1 },
        }
      );
      console.log("Likes +1");
      res.redirect(`/post/${req.params.id}`);
    } catch (err) {
      console.log(err);
    }
  },
  deletePost: async (req, res) => {
    try {
      // Find post by id
      let post = await Post.findById({ _id: req.params.id });
      // Delete image from cloudinary
      await cloudinary.uploader.destroy(post.cloudinaryId);
      // Delete post from db
      await Post.remove({ _id: req.params.id });
      console.log("Deleted Post");
      res.redirect("/profile");
    } catch (err) {
      res.redirect("/profile");
    }
  },
/////////////////////////////////////////boilerplate end/////////////////////////

createComments: async (req, res) => {
  try {

    //console.log(req.body)
    await Comments.create({
      name: req.body.name,
      comment: req.body.comment,
    });
    console.log("Comment has been added!");
    res.redirect(`/courseDetails`);
  } catch (err) {
    console.log(err);
  }
  },
  addPoints: async (req, res) => {
    try {
      req.user.points += 50
      req.user.save()
     
      console.log("Points +50");
      res.redirect('/completeGame');
      
    } catch (err) {
      console.log(err);
    }
  },
  addQuizPoints: async (req, res) => {
    try {
      req.user.points += 100
      req.user.save()
     
      console.log("Points +100");
      res.redirect('/completeQuiz');
      
    } catch (err) {
      console.log(err);
    }
  }

  


}