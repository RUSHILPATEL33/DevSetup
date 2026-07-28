import { scanEnvironment } from "../scanners/env.scanner.js";

export const runScanners = async (config) => {
  const reports = [];

  reports.push(
    scanEnvironment(config.env)
  );

  return reports;
};