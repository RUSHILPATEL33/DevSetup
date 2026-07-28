import Scan from "./scan.model.js";

export const createScan = async (scanData) => {
  return await Scan.create(scanData);
};

export const getScanById = async (id) => {
  return await Scan.findById(id)
    .populate("user", "name email")
    .populate("project", "name");
};

export const getProjectScans = async (projectId) => {
  return await Scan.find({ project: projectId })
    .sort({ createdAt: -1 });
};

export const getUserScans = async (userId) => {
  return await Scan.find({ user: userId })
    .sort({ createdAt: -1 });
};

export const deleteScan = async (id) => {
  return await Scan.findByIdAndDelete(id);
};