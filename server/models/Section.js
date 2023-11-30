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
  citations: [
    {
      law: {
        type: String,
        required: true,
      },
      law_sections: [
        {
          type: Schema.Types.Mixed,
        },
      ],
    },
  ],
});

const Section = model("Section", sectionSchema);

module.exports = Section;
