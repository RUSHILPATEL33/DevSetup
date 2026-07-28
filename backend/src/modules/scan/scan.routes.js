import express from "express";

import {
  createScan,
  getScan,
  getProjectScans,
  getUserScans,
  removeScan,
} from "./scan.controller.js";

import authMiddleware from "../../middlewares/auth.middleware.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/", createScan);

router.get("/me", getUserScans);

router.get("/project/:projectId", getProjectScans);

router.get("/:id", getScan);

router.delete("/:id", removeScan);

export default router;