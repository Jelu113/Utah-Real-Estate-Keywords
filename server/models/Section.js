const { Schema, model } = require("mongoose");

const sectionSchema = new Schema({
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
  },
  laws: [
    {
      type: Object,
      ref: "Laws",
    },
  ],
});

const Section = model("Section", sectionSchema);

module.exports = Section;
