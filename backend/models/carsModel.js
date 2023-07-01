// {
//     "title": "A6",
//     "manufacturer": "Audi",
//     "color": "Black",
//     "price": "55000"
// }

const { Schema, model } = require("mongoose");

const carsSchema = new Schema({
  title: {
    type: String,
    required: [true, "DB: title is required field"],
  },
  manufacturer: {
    type: String,
    required: [true, "DB: manufacturer is required field"],
  },
  color: {
    type: String,
    required: false,
    default: "white",
  },
  price: {
    type: Number,
    required: false,
    default: 10000,
  },
});

module.exports = model("cars", carsSchema);
