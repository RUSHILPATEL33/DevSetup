export const generateReport = (reports) => {
  const issues = [];

  let totalScore = 0;

  reports.forEach(report => {
    totalScore += report.healthScore;

    issues.push(...report.issues);
  });

  const averageScore =
    reports.length === 0
      ? 100
      : Math.round(totalScore / reports.length);

  const summary = {
    totalIssues: issues.length,
    high: issues.filter(i => i.severity === "HIGH").length,
    medium: issues.filter(i => i.severity === "MEDIUM").length,
    low: issues.filter(i => i.severity === "LOW").length,
  };

  return {
    healthScore: averageScore,
    summary,
    issues,
  };
};