const express = require("express");
//ເອີ້ນໃຊ້ງານໂມດູລ productRouter
const productRouter = require("./routes/product.route");
//
const app = express();
const port = 3000;

// root path - root endpoint
app.get("/", (req, res) => {
  res.send("Hello, How are you? I'm find, thank you!");
});

//ເອີ້ນໃຊ້ງານໂມດູລ router
app.use("/api/product", productRouter);
//
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
