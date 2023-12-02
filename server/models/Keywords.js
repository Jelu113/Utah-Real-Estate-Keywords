const { Schema, model } = require("mongoose");

const keywordSchema = new Schema({
  keyword: {
    type: String,
    required: true,
  },
  "statute": {
    type: Array,
    required: false
  },
  "statuteURL": {
    type: String,
    required: false
  },
  citations: [
    {
      section: {
        type: Schema.Types.ObjectId,
        ref: "Section"
      },
      law: {
        type: Schema.Types.ObjectId,
        ref: "Law"
      },
      sublaw: {
        type: Schema.Types.ObjectId,
        ref: "Sublaw"
      }
    }
  ],
});

const Keyword = model("Keyword", keywordSchema);

module.exports = Keyword;




