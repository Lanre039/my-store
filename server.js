const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "client/build")));

  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "client/build", "index.html"));
  });
}

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Accept, X-Requested-With, Authorization, Content-Type, x-custom-header"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,PUT,POST,PATCH,DELETE,OPTIONS"
  );
  next();
});

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,PUT,POST,PATCH,DELETE,OPTIONS",
  })
);

app.post("/payment", (req, res) => {
  const body = {
    source: req.body.token.id,
    amount: req.body.amount,
    currency: "NGN",
  };

  stripe.charges.create(body, (err, response) => {
    if (err) {
      res.status(500).send({ error: err });
    } else {
      res.status(200).send({ success: response });
    }
  });
});

app.listen(port, (error) => {
  if (error) throw error;
  console.log("Server running on port " + port);
});
