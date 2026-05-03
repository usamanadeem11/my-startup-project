const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const User = require("./models/User");

const app = express();

app.use(cors());
app.use(express.json());

// 👉 PASTE YOUR MONGODB LINK HERE
mongoose.connect("mongodb://mohdusama6666_db_user:U3f5zWASYP09fdhe@ac-a1cnt0v-shard-00-00.sbzd85k.mongodb.net:27017,ac-a1cnt0v-shard-00-01.sbzd85k.mongodb.net:27017,ac-a1cnt0v-shard-00-02.sbzd85k.mongodb.net:27017/?ssl=true&replicaSet=atlas-cpgzl0-shard-0&authSource=admin&appName=Cluster0")
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));


// SAVE DATA
app.post("/register", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json({ message: "Registration Successful" });
  } catch {
    res.json({ message: "Error saving data" });
  }
});

// VIEW DATA
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(5000, () => console.log("Server running"));


