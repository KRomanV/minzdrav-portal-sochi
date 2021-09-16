const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  dateBorn: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  repeatPassword: {
    type: String,
    required: true,
  },
  oms: {
    type: String,
    required: true,
  },
  appoint: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
    },
  ],
});
const User = mongoose.model("User", userSchema);

module.exports = User;
