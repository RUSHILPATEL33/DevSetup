import {
  createScan,
  getScanById,
  getProjectScans,
  getUserScans,
  deleteScan,
} from "./scan.repository.js";

export const saveScanService = async (scanData) => {
  return await createScan(scanData);
};

export const getScanService = async (id) => {
  return await getScanById(id);
};

export const getProjectScansService = async (projectId) => {
  return await getProjectScans(projectId);
};

export const getUserScansService = async (userId) => {
  return await getUserScans(userId);
};

export const deleteScanService = async (id) => {
  return await deleteScan(id);
};