import mongoose, { Schema } from "mongoose";

const cartSchema = new mongoose.Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  items: [{
    productId: {
        type: Schema.Types.ObjectId,
        ref: "products",
    },
    quanity: {
        type: Number,
        default: 1,
    },
    name: {
        type: String,
    },
    price: {
        type:Number,
    },
    image: {
        type: String,
    }
}],
    totalPrice: {
        type: String,
        default: 0,
    },


});


const cart = mongoose.model("cart", cartSchema);

export { cart as cartModel };