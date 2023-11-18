const { Schema, model } = require('mongoose');

const subLawSchema = new Schema({
    "law-sections": {
        type: Object,
        validate: {
            validator: function (value) {
                return Object.keys(value).some((key) => key.includes("law-section"));
            },
        },
    },
});



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
        // required: true,
    },
    "law-sections": [{
        type: Object,
        validate: {
            validator: function (value) {
                return Object.keys(value).some((key) => key.includes("law-section"));
            },
        },
    }
    ],
});

//const SubLaw = model("SubLaw", subLawSchema);
const LawSection = model('LawSection', lawSectionSchema);
module.exports = LawSection;
