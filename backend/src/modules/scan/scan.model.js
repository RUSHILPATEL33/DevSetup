import mongoose from "mongoose";

const issueSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      default: "",
    },

    field: {
      type: String,
      required: true,
    },

    severity: {
      type: String,
      enum: ["LOW", "MEDIUM", "HIGH"],
      required: true,
    },

    message: {
      type: String,
      required: true,
    },

    fix: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);

const scanSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    project: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Project",
      required: true,
    },

    healthScore: {
      type: Number,
      required: true,
    },

    summary: {
      totalIssues: {
        type: Number,
        default: 0,
      },

      high: {
        type: Number,
        default: 0,
      },

      medium: {
        type: Number,
        default: 0,
      },

      low: {
        type: Number,
        default: 0,
      },
    },

    issues: [issueSchema],

    duration: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Scan", scanSchema);