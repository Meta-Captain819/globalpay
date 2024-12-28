import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  amount: { type: Number, required: true },
  message: { type: String },
});

export default mongoose.models.Payment || mongoose.model("Payment", PaymentSchema);
