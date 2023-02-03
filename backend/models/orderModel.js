import mongoose from "mongoose";
import validator from "validator";

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    orderItems: [
      {
        name: { type: String, required: true },
        qty: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.ObjectId,
          required: true,
          ref: "Product",
        },
      },
    ],
    shippingAddress: {
      contactNumber: {
        type: String,
        required: [true, "Please provide  a emergency contact number"],
        validate: {
          validator: (value) => {
            return validator.isMobilePhone(value);
          },
          message: "Please provide a valid phone number",
        },
      },
      optionalNumber: {
        type: String,
        validate: {
          validator: (value) => {
            return validator.isMobilePhone(value);
          },
          message: "Please provide a valid phone number",
        },
      },
      city: {
        type: String,
        enum: ["within Dhaka", "outside of Dhaka"],
      },
      address: { type: String, required: true },
    },
    paymentMethod: {
      id: { type: String },
      status: { type: String },
      update_time: { type: String },
      email_address: { type: String },
    },
    paymentResult: {
      type: String,
      required: true,
    },
    coupon: {
      type: String,
      required: true,
      default: [],
    },
    shippingPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    totalPrice: {
      type: Number,
      required: true,
      default: 0,
    },
    isPaid: {
      type: Boolean,
      required: true,
      default: false,
    },
    paidAt: {
      type: Date,
    },
    isDelivered: {
      type: Boolean,
      required: true,
      default: false,
    },
    deliveredAt: {
      type: Date,
    },
  },
  {
    timestamp: true,
  }
);

const Order = mongoose.model("Order", orderSchema);

export default Order;
