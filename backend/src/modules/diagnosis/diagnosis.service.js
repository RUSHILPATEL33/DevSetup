import { runScanners } from "./manager/scanner.manager.js";
import { generateReport } from "./reports/report.generator.js";

import { saveScanService } from "../scan/scan.service.js";

export const scanEnvironmentService = async (
  config,
  userId,
  projectId
) => {
  const startTime = Date.now();

  const scannerReports = await runScanners(config);

  const report = generateReport(scannerReports);

  const duration = Date.now() - startTime;

  await saveScanService({
    user: userId,
    project: projectId,

    healthScore: report.healthScore,

    summary: report.summary,

    issues: report.issues,

    duration,
  });

  return report;
};