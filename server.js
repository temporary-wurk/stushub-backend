require('dotenv').config();
const app = require('./src/app');
const db_connection = require('./src/config/db');

const PORT=5000;

const startServer = async () => {
    try {
      console.log("Connecting to MongoDB...");  
      await db_connection;
      console.log("MongoDB connection established successfully.");
      console.log("Starting server...");
      app.listen(PORT, () => {
        console.log(`Server is Started And Running`);
      });
    } catch (error) {
      console.error("Failed to connect to MongoDB:");
      process.exit(1); 
    }
};
startServer();
