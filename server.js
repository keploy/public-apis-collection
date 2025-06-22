const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const memeRoutes = require("./routes/memeRoutes");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/memes", memeRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(`🚀 Server running at http://localhost:${process.env.PORT}`)
    );
  })
  .catch((err) => console.log(err));
