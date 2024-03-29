const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");
const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = app => {
  app.post("/api/surveys", requireLogin, requireCredits, (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      //instance of a Survey
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map(recipient => ({ email: recipient.trim() })), //trim any extra spaces
      _user: req.user.id,
      dateSent: Date.now()
    });

    //great place to send an email
    const mailer = new Mailer(survey, surveyTemplate(survey)); //instance of a class
    mailer.send();
  });
};
