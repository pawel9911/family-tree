const keys = require("../config/keys");
const stripe = require("stripe")(keys.stripeSecretKey);

module.exports = (app) => {
  app.post("/api/payments-intent", async (req, res) => {
    const { amount } = req.body;

    try {
      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount,
        currency: "usd",
        automatic_payment_methods: { enabled: true },
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    } catch (e) {
      res.status(500).send({ error: e.message });
    }
  });

  app.post("/api/payments-confirm", async (req, res) => {
    const { paymentIntentId } = req.body;

    try {
      const { status, metadata } =
        await stripe.paymentIntents.retrieve(paymentIntentId);

      if (status === "succeeded" && !metadata.processed) {
        req.user.credits += 5;
        await req.user.save();

        await stripe.paymentIntents.update(paymentIntentId, {
          metadata: { userId: req.user.id, processed: "true" },
        });
      }

      res.send(req.user);
    } catch (e) {
      res.status(e.statusCode).send({ error: e.message });
    }
  });
};
