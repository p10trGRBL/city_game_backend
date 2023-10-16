import express from 'express';
import cors from 'cors';
import {ErrorHanlder} from './middleware/ErrorHandler.js';
import cityRoutes from './routes/cityRoutes.js';
import './db/server.js';

const app = express();
const PORT = process.env.PORT ||8000;

app.use(express.json());
app.use(cors());
app.use(ErrorHanlder);

app.listen(PORT, ()=>console.log(`Server is listening to ${PORT}`))


