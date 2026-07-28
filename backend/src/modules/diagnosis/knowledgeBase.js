const knowledgeBase = {
  JWT_SECRET_MISSING: {
    field: "JWT_SECRET",
    severity: "HIGH",
    message: "JWT Secret is missing.",
    fix: "Add JWT_SECRET to your .env file.",
  },

  MONGO_URI_MISSING: {
    field: "MONGO_URI",
    severity: "HIGH",
    message: "MongoDB connection string is missing.",
    fix: "Add a valid MONGO_URI in your .env file.",
  },

  PORT_MISSING: {
    field: "PORT",
    severity: "MEDIUM",
    message: "PORT is not defined.",
    fix: "Set PORT in your .env file (e.g., PORT=5000).",
  },

  NODE_ENV_MISSING: {
    field: "NODE_ENV",
    severity: "LOW",
    message: "NODE_ENV is not defined.",
    fix: "Set NODE_ENV to development or production.",
  },

  INVALID_MONGO_URI: {
    field: "MONGO_URI",
    severity: "HIGH",
    message: "MongoDB URI appears to be invalid.",
    fix: "Verify your MongoDB connection string.",
  },
};

export default knowledgeBase;   