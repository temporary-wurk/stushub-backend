const mongoose = require("mongoose");
require("dotenv").config(); 

const db_connection = mongoose.connect(process.env.MONGO_DB, {})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:");
    });

module.exports = db_connection;