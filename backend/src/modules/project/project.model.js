import mongoose from "mongoose";
import validator from "validator";

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Project name is required"],
      trim: true,
      minlength: 3,
      maxlength: 100,
    },

    description: {
      type: String,
      trim: true,
      maxlength: 500,
      default: "",
    },

    framework: {
      type: String,
      required: [true, "Framework is required"],
      enum: [
        "Express.js",
        "Node.js",
        "NestJS",
        "Spring Boot",
        "Django",
        "Flask",
        "Laravel",
        "Other",
      ],
    },

    githubUrl: {
      type: String,
      trim: true,
      default: "",
      validate: {
        validator: function (value) {
          return value === "" || validator.isURL(value);
        },
        message: "Invalid GitHub URL",
      },
    },

    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Project = mongoose.model("Project", projectSchema);

export default Project;