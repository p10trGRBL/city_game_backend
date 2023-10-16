
const express = require("express");
const cors = require("cors");
const ErrorHanlder = require("./middleware/ErrorHandler.js");

const app = express();
require("dotenv").config();
const users = require("./routes/userRoutes.js");
const cityRoutes = require("./routes/cityRoutes.js");

const connectDB = require("./db/server.js");
connectDB();

app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(cors());

app.use('/game', cityRouter);



app.use("/leaderboard/users", users);

// app.use("/", ErrorHanlder);
app.listen(PORT, () => console.log(`Server is listening to ${PORT}`));
