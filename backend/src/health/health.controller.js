import healthService from "./health.service.js";

const getHealth = (req, res) => {
  const response = healthService.getHealthStatus();

  res.status(200).json(response);
};

export default {
  getHealth,
};