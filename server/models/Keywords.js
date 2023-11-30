const { Schema, model } = require("mongoose");

const keywordSchema = new Schema({
  keyword: {
    type: String,
    required: true,
  },
  "statute": {
    type:Array,
    required: false
  },
  "statuteURL": {
    type: String,
    required:false
  },
  citations: [
    {
      section: {
        type: String,
        ref: "Section",
      },
      laws: {
        type: String,
        required: false
        
      },
      sublaws: {
        type: String,
        required :false
       
      },
    }
  ]
});

const Keyword = model("Keyword", keywordSchema);

module.exports = Keyword;