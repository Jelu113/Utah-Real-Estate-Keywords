const { Schema, model } = require('mongoose');

const lawSectionSchema = new Schema({
    "section-number": {
        type: String,
        required: true,
    },
    "section-title": {
        type: String,
        required: true,
    },
    "section-calrifier": {
        type: String,
        required: true,
    },
    "law-section": {
        type: String,
        required: true
    }
});

const LawSection = model('LawSection', lawSectionSchema);
module.exports = LawSection;
