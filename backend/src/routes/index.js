import express from "express";
import projectRoutes from "../modules/project/project.routes.js";
import diagnosisRoutes from "../modules/diagnosis/diagnosis.routes.js";
import scanRoutes from "../modules/scan/scan.routes.js";

import healthRoutes from "../modules/health/health.routes.js";
import authRoutes from "../modules/auth/auth.routes.js";

const router = express.Router();

router.use("/health", healthRoutes);
router.use("/auth", authRoutes);
router.use("/projects", projectRoutes);
router.use("/diagnosis", diagnosisRoutes);
router.use("/scan", scanRoutes);

export default router;