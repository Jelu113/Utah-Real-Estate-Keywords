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
  sectionclarifier: {
    type: String,
  },
  laws: [
    {
      type: Schema.Types.ObjectId,
      ref: "Laws",
    },
  ],
});

const Section = model("Section", sectionSchema);

module.exports = Section;
