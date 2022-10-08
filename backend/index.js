const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
// const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
// const productRoute = require("./routes/product");
// const cartRoute = require("./routes/cart");
// const orderRoute = require("./routes/order");
// const stripeRoute = require("./routes/stripe");


mongoose.connect(
    process.env.MONGO_URI
).then(() => {
    console.log('Database connected successfully');
}).catch((err) => {
    console.log(err);
});


const PORT = 5000;


app.use(express.json());
app.use(cors());
app.use("/api/auth", authRoute);
// app.use("/api/users", userRoute);
// app.use("/api/products", productRoute);
// app.use("/api/carts", cartRoute);
// app.use("/api/orders", orderRoute);
// app.use("/api/checkout", stripeRoute);


app.listen(process.env.PORT || PORT, () => {
    console.log(`Backend server is running on port ${process.env.PORT || PORT}`);
});