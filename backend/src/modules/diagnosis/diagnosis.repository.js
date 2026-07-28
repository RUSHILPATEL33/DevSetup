import { scanEnvironment } from "./scanners/env.scanner.js";

export const runEnvironmentScan = async (envData) => {
  return scanEnvironment(envData);
};