const mongoose = require("mongoose");

const roles = require("../utils/enums/role.enum");

const Account = mongoose.Schema({
  username: {
    type: String,
    required: true,
    min: 6,
    min: 32,
  },
  email: {
    type: String,
    required: true,
  },
  passwordHash: {
    type: String,
    required: true,
    min: 6,
  },
  role: {
    type: Number,
    required: true,
    default: roles.USER,
  },
  createdRecipes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  likedRecipes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  passedRecipes: {
    type: [mongoose.Schema.Types.ObjectId],
    default: [],
  },
  creation_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("accounts", Account);
