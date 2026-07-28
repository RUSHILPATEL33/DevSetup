import asyncHandler from "../../utils/asyncHandler.js";
import ApiResponse from "../../utils/ApiResponse.js";

import {
  saveScanService,
  getScanService,
  getProjectScansService,
  getUserScansService,
  deleteScanService,
} from "./scan.service.js";

export const createScan = asyncHandler(async (req, res) => {
  const scan = await saveScanService(req.body);

  return res.status(201).json(
    new ApiResponse(201, scan, "Scan saved successfully")
  );
});

export const getScan = asyncHandler(async (req, res) => {
  const scan = await getScanService(req.params.id);

  return res.status(200).json(
    new ApiResponse(200, scan, "Scan fetched successfully")
  );
});

export const getProjectScans = asyncHandler(async (req, res) => {
  const scans = await getProjectScansService(req.params.projectId);

  return res.status(200).json(
    new ApiResponse(200, scans, "Project scans fetched successfully")
  );
});

export const getUserScans = asyncHandler(async (req, res) => {
  const scans = await getUserScansService(req.user.id);

  return res.status(200).json(
    new ApiResponse(200, scans, "User scans fetched successfully")
  );
});

export const removeScan = asyncHandler(async (req, res) => {
  await deleteScanService(req.params.id);

  return res.status(200).json(
    new ApiResponse(200, null, "Scan deleted successfully")
  );
});