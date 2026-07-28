import express from "express";

import authMiddleware from "../../middlewares/auth.middleware.js";

import { environmentScan } from "./diagnosis.controller.js";

const router = express.Router();

router.use(authMiddleware);

router.post("/env", environmentScan);

export default router;  