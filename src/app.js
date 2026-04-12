const express = require('express');
const app = express();
app.use(express.json());
require('dotenv').config();

const cors = require('cors');
app.use(cors());

const pdfrouter = require('./routes/pdf.routes');
const emailrouter = require('./routes/email.routes');


app.get('/', (req, res) => {
  res.send('Welcome to the Student Management System');
});


app.use('/api/pdf', pdfrouter);
app.use('/api/email', emailrouter);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});






module.exports = app;