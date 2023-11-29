const { Schema, model } = require("mongoose");

const sublawSchema = new Schema({
  sublaws: [
    {
      type: Object,
      validate: {
        validator: function (value) {
          return Object.keys(value).some((key) => key.includes("law_section"));
        },
      },
    },
  ],
});

const Sublaws = model("Sublaws", sublawSchema);

module.exports = Sublaws;
