const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = app => {
  app.post("/api/stripe", async (req, res) => {
    //reach out to the Stripe API with the token and finalize the charge
    //console.log(req.body);  in terminal
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id //the charge token
    });
    console.log(charge); //charge obejct
  });
};

//then we need to update the user's number of credits
