const { Schema, model } = require("mongoose");


const lawSchema = new Schema({
    law: {
        type: String,
        required: false,
    },
    sublaws: [{
        type: Schema.Types.ObjectId,
        ref: "Sublaw"
      }],
});


const Law = model("Law", lawSchema);

module.exports = Law;