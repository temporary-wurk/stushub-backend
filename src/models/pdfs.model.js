const mongoose = require("mongoose");

const pdfSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    fileUrl: {
        type: String,
        required: true
    },

    subject :{
        type: String,
        required: true
    },

    type:{
        type: String,
        enum : ['CT-1', 'CT-2', 'Assignment','End-Sem'],
        required: true
    },
    session:{
        type: Number,
        default:[2025-2026]
    },

    section:{
        type: String,
        enum : ['P','Q'],
        required: true
    },

    uploadedAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("PDF", pdfSchema);