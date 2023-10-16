import express from 'express';

import { getCityById } from '../controllers/city.js';

const cityRouter = express.Router();

cityRouter.route('/:id').get(getCityById);


export default cityRouter;