const express = require("express");
const app = express();
const blogRouter = require("./routes/BlogRoutes");
//middleware
app.use(express.json());

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/blogs", blogRouter);



module.exports = app;
const mongoose = require("mongoose");
//configure mongoose
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/blogs",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Connected to MongoDB");
    }
  }
);


app.listen(3001, () => {
  console.log("Server is running on port 3001");
});