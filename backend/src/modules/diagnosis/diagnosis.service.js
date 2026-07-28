import { runScanners } from "./manager/scanner.manager.js";
import { generateReport } from "./reports/report.generator.js";

export const scanEnvironmentService = async (config) => {
  const scannerReports = await runScanners(config);

  return generateReport(scannerReports);
};