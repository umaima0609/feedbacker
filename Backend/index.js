const express = require("express");
require('dotenv').config();
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors")


app.use(cors());
// // app.use(express.json());


// app.use(cors({
  
//   origin:  'http://localhost:5174',
//   methods: 'GET,POST',
//   credentials: true
// }));

const auth = require("./Routers/Auth")

app.use("/api/v1", auth)


const mongoUrl = process.env.MONGODB_URL;
console.log(process.env.MONGODB_URL)

mongoose.connect(mongoUrl)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(error => {
    console.error('Error connecting to MongoDB:', error);
  });

  app.get("/", (req, res) => {
    res.send("Server is running!");
  });

  
app.listen(3000, () => {
    console.log(" server is running");
  });
