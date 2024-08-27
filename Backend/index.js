const express = require("express");
require('dotenv').config();
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors")


app.use(cors());
// // app.use(express.json());


app.use(cors({
  
  origin:  'https://student-feedbacker-frontend.vercel.app',
  methods: 'GET,POST',
  credentials: true
}));

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

// testing
  app.get('/test', (req, res) => {
    res.send('Hello World');
});
app.post('/api/v1/login', (req, res, next) => {
  console.log('Login API hit');
  console.log(req.body); // Check payload
  
  // Dummy response for testing
  res.status(200).json({ message: 'Login successful' });
});  





app.listen(3000, () => {
    console.log(" server is running");
  });
