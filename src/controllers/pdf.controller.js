const pdfservice = require('../services/pdf.service') ;

const getallpdf = async (req, res) => {
    try {
        const pdf = await pdfservice.getallpdf();
        res.status(200).json(pdf);
    }
    catch (error) {
        res.status(500).json({ message: "Error on getting pdf" });
    }
}

const searchpdf = async (req, res) => {
    try {
        const { subject , type , section} = req.params;
        const pdf = await pdfservice.searchpdf(subject , type , section);
        res.status(200).json(pdf);
    }
    catch (error) {
        res.status(500).json({ message: "Error on searching pdf" });
    }
}

const downloadpdf = async (req, res) => {
    try {
        const { id } = req.params;
        const pdf = await pdfservice.getpdfbyid(id);
        if (!pdf) {
            return res.status(404).json({ message: 'PDF not found' });
        }
        res.download(pdf.fileUrl);
    }
    catch (error) {
        res.status(500).json({ message: "Error on downloading pdf" });
    }
}

module.exports = { getallpdf, searchpdf, downloadpdf };