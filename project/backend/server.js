import express from "express";
import medicineRoutes from "./routes/medicine.js";
import cors from "cors";
import dotenv from "dotenv";
const app = express();
dotenv.config();
app.use(cors());
app.get("/", (req, res) => {
  res.json("Api is working");
});
const port = process.env.PORT | 5000;
// this is the mistake we are doing that we have to use middlewhere instead of get express method
app.use("/api/medicine", medicineRoutes);
// all the data is come in the api as well as the data is coming from the id
app.listen(port, () => {
  console.log(`Application is running in ${process.env.NODE_ENV} on ${port}`);
});
