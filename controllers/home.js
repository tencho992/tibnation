const Comments = require("../models/Comments");

module.exports = {
  getIndex: (req, res) => {
    res.render("index.ejs");
    
  },
  getNews: (req, res) => {
    res.render("news.ejs");
    
  },
  getAbout: (req, res) => {
    res.render("about.ejs");
    
  },
  getContact: (req, res) => {
    res.render("contact.ejs");
    
  },
  getCourseList: (req, res) => {
    res.render("courseList.ejs");
    
  },
  getCourseDetails: async (req, res) => {
      try {
        const comment = await Comments.find();
        res.render("courseDetails.ejs", { comment: comment });
      } catch (err) {
        console.log(err);
      }
    
    
  },
  getPracticeOne: (req, res) => {
    res.render("practiceOne.ejs");
    
  },
  getQuizOne: (req, res) => {
    res.render("quizOne.ejs");
    
  },
  getCompleteGame: (req, res) => {
    res.render("completeGame.ejs");
    
  },
  getCompleteQuiz: (req, res) => {
    res.render("completeQuiz.ejs");
    
  },
  getTranslation: (req, res) => {
    res.render("translation.ejs");
    
  },
  getFlashcards: (req, res) => {
    res.render("flashcards.ejs");
    
  },
  getDraw: (req, res) => {
    res.render("drawConsonant.ejs");
    
  }
};
