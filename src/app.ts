import express from "express";
import productRoutes from "./routes/productRoutes";

const app = express();

app.use(express.json());
app.get("/", (req, res, next) => {
  res.json({ message: "hello world" });
});
app.use("/products", productRoutes);

export default app;
