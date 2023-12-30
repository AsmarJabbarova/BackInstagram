const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: String,
    surname: String,
    email: String,
    password: String,
    isPuclic: Boolean,
    posts: Array,
    follower: Array,
    following: Array,
    blockList: Array,
    blockList: Array,
    notifications: Array,
    bio: Object,
    id: String,
  },
  { collection: "Instagrammm", timestamps: false }
);

const User = mongoose.model("Instagrammm", userSchema);

module.exports = User;
