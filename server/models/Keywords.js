const { Schema, model } = require("mongoose");

const keywordSchema = new Schema({
  keyword: {
    type: String,
    required: true,
  },
  section: [
    {
      type: Schema.Types.ObjectId,
      ref: "Section",
    },
  ],
  laws: [
    {
      type: Schema.Types.ObjectId,
      ref: "Laws",
    },
  ],
  sublaws: [
    {
      type: Schema.Types.ObjectId,
      ref: "Sublaw",
    },
  ],
});

const Keyword = model("Keyword", keywordSchema);

module.exports = Keyword;
