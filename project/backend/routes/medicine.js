import express from "express";
import { getmedicineall, getmedicinebyId } from "../controllers/medicine.js";
const routes = express.Router();
routes.get("/", getmedicineall);
routes.get("/:id", getmedicinebyId);
export default routes;
