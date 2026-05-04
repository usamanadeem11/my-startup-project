const Razorpay = require("razorpay");
const User = require("./models/User");
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


const razorpay = new Razorpay({
  key_id: "rzp_test_SlH9cniYfJOTuE",
  key_secret: "bpLZqP4B5bdQZbElqWmri4Dy"
});

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect("mongodb://mohdusama6666_db_user:U3f5zWASYP09fdhe@ac-a1cnt0v-shard-00-00.sbzd85k.mongodb.net:27017,ac-a1cnt0v-shard-00-01.sbzd85k.mongodb.net:27017,ac-a1cnt0v-shard-00-02.sbzd85k.mongodb.net:27017/?ssl=true&replicaSet=atlas-cpgzl0-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// Simple route
app.get("/", (req, res) => {
  res.send("Server is working");
});
app.post("/create-order", async (req, res) => {

  try {
    const order = await razorpay.orders.create({
      amount: 15000, // ₹150
      currency: "INR"
    });

    res.json(order);

  } catch (err) {
    console.log(err);
    res.status(500).send("Error creating order");
  }

});
// Start server
app.listen(5000, () => {
  console.log("Server running on port 5000");
});

// SAVE USER (this is /register door)
app.post("/register", async (req, res) => {

  const user = new User(req.body);
  await user.save();

  res.json({ message: "Saved successfully" });

});


// SHOW USERS (this is /users door)
app.get("/users", async (req, res) => {

  const users = await User.find();
  res.json(users);

});
