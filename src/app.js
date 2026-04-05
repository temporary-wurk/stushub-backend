const express = require('express');
const app = express();
app.use(express.json());


const pdfrouter = require('./routes/pdf.routes');


app.get('/', (req, res) => {
  res.send('Welcome to the Student Management System');
});


app.use('/api/pdf', pdfrouter);





module.exports = app;