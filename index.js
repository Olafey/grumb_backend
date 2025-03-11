// //JS module systems
// //module commonJs

// const getProducts = require("./product");

// //default import
// const jjj = require("./test");

// //named import
// const { getTest } = require("./test");

//this is to import express
// const express = require("express");

//this is to initialize the app
// const app = express();

// //baseUrl...... endpoint
// const PORT = "4000";

// app.listen(PORT, () => {
//   console.log("Listening to server on port 4000");
// });

// //https://localhost:4000/products

// app.get("/products", (req, res) => {
//   res.send("This is all products");
// });

// app.get("/user", (req, res) => {
//   res.json({
//     name: "Olamide",
//     age: 700,
//     username: "Olafey",
//     Address: "Iwo Road",
//   });
// });

const express = require("express");
const app = express();
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
  console.log("listening for port " + PORT);
});

app.get("/", (req, res) => {
  res.send("Welcome to Grumb");
});

const addProduct = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    message: `has been added successfully`,
  });
};
app.post("/products", addProduct);

const updateProduct = (req, res) => {
  console.log(req.body.name);
  res.status(200).json({
    message: `product updated successfully`,
  });
};
app.patch("/products", updateProduct);
