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
    "section-clarifier": {
        type: String,
        required: true,
    },
    "law-sections": [{
        type: String,
        required: true
    }]
});


const LawSection = model('LawSection', lawSectionSchema);
module.exports = LawSection;
