import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  profilePicture: { type: String },
  coverPicture: { type: String },
  transactions: [
    {
      method: { type: String, required: true },
      transactionId: { type: String, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
