import mongoose from "mongoose";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: { types: String, required: true },
        qty: { types: Number, required: true },
        image: { types: String, required: true },
        price: { types: String, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      address: { types: String, required: true },
      city: { types: String, required: true },
      postalCode: { types: String, required: true },
      country: { types: String, required: true },
    },
    paymentMethod: { types: String, required: true, default: "Paypal" },
    paymentResult: {
      id: { types: String },
      status: { types: String },
      update_time: { types: String },
      email_address: { types: String },
    },
    taxPrice: { types: Number, required: true, default: 0.0 },
    shippingPrice: { type: Number, required: true, default: 0.0 },
    totalPrice: { types: Number, required: true, default: 0.0 },
    isPaid: { types: Boolean, required: true, default: false },
    paidAt: { type: Date },
    isDelivered: { types: Boolean, required: true, default: false },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model("Order", orderSchema);
export default Order;
