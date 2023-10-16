const express = require("express");

const { getCityById, getAllCities } = require("../controllers/city.js");

const cityRouter = express.Router();

cityRouter.route("/:id").get(getCityById);
cityRouter.route("/").get(getAllCities);

module.exports = cityRouter;
