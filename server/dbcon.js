const mongoose = require("mongoose");

const database = mongoose
  .connect(
    "mongodb+srv://admin:admin@cluster0.n9w11.mongodb.net/bia_collection?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = database;
