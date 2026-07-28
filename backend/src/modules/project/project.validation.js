import { body } from "express-validator";

export const createProjectValidation = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("Project name is required")
    .isLength({ min: 3, max: 100 })
    .withMessage("Project name must be between 3 and 100 characters"),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Description cannot exceed 500 characters"),

  body("framework")
    .trim()
    .notEmpty()
    .withMessage("Framework is required"),

  body("githubUrl")
    .optional({ checkFalsy: true })
    .isURL()
    .withMessage("Invalid GitHub URL"),
];

export const updateProjectValidation = [
  body("name")
    .optional()
    .trim()
    .isLength({ min: 3, max: 100 })
    .withMessage("Project name must be between 3 and 100 characters"),

  body("description")
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage("Description cannot exceed 500 characters"),

  body("framework")
    .optional()
    .trim()
    .notEmpty()
    .withMessage("Framework cannot be empty"),

  body("githubUrl")
    .optional({ checkFalsy: true })
    .isURL()
    .withMessage("Invalid GitHub URL"),
];