const sendgrid = require("sendgrid");
const helper = sendgrid.mail; //const { mail } = sendgrid

const keys = require("../config/keys");

class Mailer extends helper.Mail {
  constructor({ subject, recipients }, content) {
    super(); //to execute whatevs on the Mail class that we extending

    this.sgApi = sendgrid(keys.sendGridKey); //passing API key here
    this.from_email = new helper.Email("no-reply@emaily.com");
    this.subject = subject;
    this.body = new helper.Content("text/html", content);
    this.recipients = this.formatAddresses(recipients);

    this.addContent(this.body); //this is from Mail class ext
    this.addClickTracking();
    this.addRecipients();
  }

  formatAddresses = recipients => {
    return recipients.map(({ email }) => {
      return new helper.Email(email); //an array of emails
    });
  };

  addRecipients = () => {
    const personalize = new helper.Personalization();
    this.recipients.forEach(recipient => {
      personalize.addTo(recipient);
    });
    this.addPersonalization(personalize);
  };

  addClickTracking = () => {
    const trackingSettings = new helper.TrackingSettings();
    const clickTracking = new helper.ClickTracking(true, true);

    trackingSettings.setClickTracking(clickTracking);
    this.addTrackingSettings(trackingSettings);
  };

  async send() {
    const request = sgApi.emptyRequest({
      method: "POST",
      path: "/v3/mail/send",
      body: this.toJSON()
    });

    const response = this.sgApi.API(request); //sends it off to sendgrid
    return response;
  }
}
module.exports = Mailer;

//const mailer = new Mailer(survey, surveyTemplate(survey));

//helper.Email & helper.Content are from sendgrid
