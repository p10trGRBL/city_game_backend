import express from 'express';
import cors from 'cors';
import cityRouter from './routes/cityRoutes.js';
import { ErrorHandler } from './middleware/ErrorHandler.js';
import './db/server.js'


const app = express();
const PORT = process.env.PORT ||8000;

app.use(express.json());
app.use(cors());

app.use('/', cors(), cityRouter);



app.use(ErrorHandler);

app.listen(PORT, ()=>console.log(`Server is listening to ${PORT}`))


