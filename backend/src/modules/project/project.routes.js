import express from "express";

import {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
} from "./project.controller.js";

import {
  createProjectValidation,
  updateProjectValidation,
} from "./project.validation.js";

import validateRequest from "../../middlewares/validateRequest.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const router = express.Router();

// All project routes require authentication
router.use(authMiddleware);

router.post(
  "/",
  createProjectValidation,
  validateRequest,
  createProject
);

router.get("/", getProjects);

router.get("/:id", getProject);

router.put(
  "/:id",
  updateProjectValidation,
  validateRequest,
  updateProject
);

router.delete("/:id", deleteProject);

export default router;