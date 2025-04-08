import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  address: [
    {
      street: { type: String, required: true },
      apartment: { type: String, required: false },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zipcode: { type: String, required: true },
    },
  ],
});

const user = mongoose.model("user", userSchema);

export { user as userModel };