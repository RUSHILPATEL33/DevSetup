const getHealthStatus = () => {
  return {
    success: true,
    message: "DevSetup Doctor API is running 🚀",
    version: "1.0.0",
    timestamp: new Date().toISOString(),
  };
};

export default {
  getHealthStatus,
};