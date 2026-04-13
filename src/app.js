const express = require('express');
const app = express();
app.use(express.json());


const cors = require('cors');
app.use(cors());

const pdfrouter = require('./routes/pdf.routes');
const emailrouter = require('./routes/email.routes');


app.get('/', (req, res) => {
  res.send('Welcome to the Student Management System');
});

app.get('/*', (req, res) => {
  res.status(404).redirect('/'); 
});


app.use('/api/pdf', pdfrouter);
app.use('/api/email', emailrouter);







module.exports = app;
