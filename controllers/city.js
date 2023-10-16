const City = require("../models/City.js");

const getCityById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const city = await City.findById(id);
    if (!city) {
      throw { statusCode: 404, message: "City not found" };
    }
    res.send(city);
  } catch (error) {
    next(error);
  }
};

const getAllCities = async (req, res) => {
  try {
    const cities = await City.find();
    if (!cities.length) {
      res.status(200).json({ msg: "No city found" });
    } else {
      res.status(200).json({ cities });
    }
  } catch (err) {
    res.status(500).json({ error: "Failed to find city data" });
    console.log(err);
  }
};

module.exports = { getCityById, getAllCities };
