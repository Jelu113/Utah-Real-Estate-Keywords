const { Schema, model } = require("mongoose");

const sectionSchema = new Schema({
  section_number: {
    type: String,
    required: true
  },
  section_title: {
    type: String,
    required: false,
  },
  section_clarifier: {
    type: String,
  },
  law_sections: [
    {
      law: {
        type: String,
        required: false,
      },
      law_section_a:{
        type: String,
        required: false,
      },
      law_section_b:{
        type: String,
        required: false,
      },
      law_section_c:{
        type: String,
        required: false,
      },
      law_section_d:{
        type: String,
        required: false,
      },
      law_section_e:{
        type: String,
        required: false,
      },
      law_section_f:{
        type: String,
        required: false,
      },
      law_section_g:{
        type: String,
        required: false,
      },
      law_section_h:{
        type: String,
        required: false,
      },
      law_section_i:{
        type: String,
        required: false,
      },
      law_section_j:{
        type: String,
        required: false,
      },
      law_section_k:{
        type: String,
        required: false,
      },
      law_section_l:{
        type: String,
        required: false,
      },
      law_section_m:{
        type: String,
        required: false,
      },
      law_section_n:{
        type: String,
        required: false,
      },
      law_section_o:{
        type: String,
        required: false,
      },
      law_section_p:{
        type: String,
        required: false,
      },
      law_section_q:{
        type: String,
        required: false,
      },
      law_section_r:{
        type: String,
        required: false,
      },
      law_section_s:{
        type: String,
        required: false,
      },
      law_section_t:{
        type: String,
        required: false,
      },
      law_section_u:{
        type: String,
        required: false,
      },
      law_section_w:{
        type: String,
        required: false,
      },
      law_section_x:{
        type: String,
        required: false,
      },
      law_section_y:{
        type: String,
        required: false,
      },
      law_section_z:{
        type: String,
        required: false,
      },
    },
  ],
});

const Section = model("Section", sectionSchema);

module.exports = Section;

