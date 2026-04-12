const pdfmodel = require("../models/pdfs.model");

module.exports.getallpdf = async () => {
    const pdf = await pdfmodel.find();
    return pdf;
}

module.exports.searchpdf = async (subject, type, section) => {
    const pdf = await pdfmodel.findOne({ subject, type, section });
    return pdf;
}

