const express = require("express");
const api = express.Router();

const { createUser, getAllUsers, updateUser } = require("../controllers/user");

api.route("/").post(createUser).get(getAllUsers);
api.route("/:id").put(updateUser);

module.exports = api;
