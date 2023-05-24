const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const postsController = require("../controllers/posts");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const passport = require("passport");

//Main Routes - landing page // boilerplate
router.get("/", homeController.getIndex); 
router.get("/profile", ensureAuth, postsController.getProfile);
router.get("/feed", ensureAuth, postsController.getFeed);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/settings", ensureAuth, postsController.getSettings);
router.put("/updateUser/:id", ensureAuth, authController.updateUser);
router.put("/updateEmail/:id", ensureAuth, authController.updateEmail);
router.get("/auth/google", passport.authenticate(["google", "local"], { scope: ["email", "profile"] }));
router.get("/auth/google/callback", passport.authenticate(["google", "local"]), authController.googleCallback );


//main routes --body////////////

router.get("/news", homeController.getNews);
router.get("/about", homeController.getAbout);
router.get("/contact", homeController.getContact);
router.get("/courseList", homeController.getCourseList); ///same html for profile???
router.get("/courseDetails", homeController.getCourseDetails);
router.get("/practiceOne", homeController.getPracticeOne); //Prior wishlist.ejs
router.get("/quizOne", homeController.getQuizOne);
router.get("/completeGame", homeController.getCompleteGame); //Prior wishlist.ejs
router.get("/completeQuiz", homeController.getCompleteQuiz); //Prior wishlist.ejs
router.get("/translation", homeController.getTranslation);
router.get("/flashcards", homeController.getFlashcards);
router.get("/draw", homeController.getDraw);
router.get("/level2", homeController.getLevelTwo);
router.get("/dev", homeController.getDev); 

module.exports = router;

//