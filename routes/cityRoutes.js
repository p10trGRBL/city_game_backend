const express = require ('express');

const { getCityById } =require ( '../controllers/city.js');

const cityRouter = express.Router();

cityRouter.route('/:id').get(getCityById);


module.exports = cityRouter;