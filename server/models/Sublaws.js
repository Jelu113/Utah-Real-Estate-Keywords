const { Schema, model } = require("mongoose");

const sublawSchema = new Schema({
law_section_a: String,
law_section_b: String,
law_section_c: String,
law_section_d: String,
law_section_e: String,
law_section_f: String,
law_section_g: String,
law_section_h: String,
law_section_i: String,
law_section_j: String,
law_section_k: String,
law_section_l: String,
law_section_m: String,
law_section_n: String,
law_section_o: String,
law_section_p: String,
law_section_q: String,
law_section_r: String,
law_section_s: String,
law_section_t: String,
law_section_u: String,
law_section_v: String,
law_section_w: String,
law_section_x: String,
law_section_y: String,
law_section_z: String,




  // sublaws: [
  //   {
  //     type: Object,
  //     validate: {
  //       validator: function (value) {
  //         return Object.keys(value).some((key) => key.includes("law_section"));
  //       },
  //     },
  //   },
  // ],
});

const Sublaws = model("Sublaws", sublawSchema);

module.exports = Sublaws;
