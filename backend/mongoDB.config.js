const mongoose = require("mongoose");

const connection = process.env.DB_CONNECTION;

module.exports = () => {
  mongoose
    .connect(connection, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    })
    .then(() => console.log("MongoDB connected..."))
    .catch((err) => console.log("MongoDB NOT connected ", err));
};
