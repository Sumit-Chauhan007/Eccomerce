import express from "express";
import users from "./data/users.js";
import User from "./Models/UserModel.js";
import Product from "./Models/ProductsModel.js";
import asyncHandler from "express-async-handler";
import data from "./data/Products.js";

const ImportData = express.Router();

ImportData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.remove({});
    const importUser = await User.insertMany(users);
    res.send({ importUser });
  })
);
ImportData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Product.remove({});
    const importProducts = await Product.insertMany(data);
    res.send({ importProducts });
  })
);

export default ImportData;
