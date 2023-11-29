const { Schema, model } = require("mongoose");

const lawSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  sublaws: [
    {
      type: Schema.Types.ObjectId,
      ref: "Sublaws",
    },
  ],
});

const Laws = model("Laws", lawSchema);

module.exports = Laws;
