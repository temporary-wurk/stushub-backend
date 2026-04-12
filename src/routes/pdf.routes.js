const express = require("express");
const router = express.Router();

const { getallpdf, searchpdf, downloadpdf } = require('../controllers/pdf.controller');

router.get('/', getallpdf);
router.get('/search/:pdfname', searchpdf);
router.get('/download/:id', downloadpdf);





module.exports = router;