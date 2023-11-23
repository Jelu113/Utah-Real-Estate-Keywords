const { Schema, model } = require('mongoose');

// const subLawSchema = new Schema({
//     "law-sections": {
//         type: Object,
//         validate: {
//             validator: function (value) {
//                 return Object.keys(value).some((key) => key.includes("law-section"));
//             },
//         },
//     },
// });



const lawSectionSchema = new Schema({
    section_number: {
        type: String,
        required: true,
    },
    section_title: {
        type: String,
        required: true,
    },
    section_clarifier: {
        type: String,
        // required: true,
    },
    law_sections: [{
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


//once we map the data, we add if!null, display data