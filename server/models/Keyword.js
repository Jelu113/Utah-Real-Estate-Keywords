const { Schema, model } = require("mongoose");

const keywordSchema = new Schema({
  keyword: {
    type: String,
    required: true,
  },
  section: [
    {
      type: String,
      ref: "Section",
    },
  ],
  laws: [
    {
      type: String,
      ref: "Laws",
    },
  ],
  sublaws: [
    {
      type: String,
      ref: "Sublaw",
    },
  ],
});

const Keyword = model("Keyword", keywordSchema);

module.exports = Keyword;
