import knowledgeBase from "../knowledgeBase.js";

export const scanEnvironment = (env = {}) => {
  const issues = [];

  if (!env.PORT) {
    issues.push(knowledgeBase.PORT_MISSING);
  }

  if (!env.JWT_SECRET) {
    issues.push(knowledgeBase.JWT_SECRET_MISSING);
  }

  if (!env.MONGO_URI) {
    issues.push(knowledgeBase.MONGO_URI_MISSING);
  }

  if (!env.NODE_ENV) {
    issues.push(knowledgeBase.NODE_ENV_MISSING);
  }

  if (
    env.MONGO_URI &&
    !env.MONGO_URI.startsWith("mongodb://") &&
    !env.MONGO_URI.startsWith("mongodb+srv://")
  ) {
    issues.push(knowledgeBase.INVALID_MONGO_URI);
  }

  const totalChecks = 4;
  const passedChecks = totalChecks - issues.filter(
    issue => issue.field !== "MONGO_URI" || issue.message !== "MongoDB URI appears to be invalid."
  ).length;

  const healthScore = Math.max(
    0,
    Math.round((passedChecks / totalChecks) * 100)
  );

  return {
    healthScore,
    issues,
  };
};