const { Schema, model } = require("mongoose");
const Laws = require("./Laws");

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
      type: Schema.Types.ObjectId,
      ref: "Law"
    },
  ]
});

const Section = model("Section", sectionSchema);

module.exports = Section;
