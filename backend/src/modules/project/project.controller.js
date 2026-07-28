import {
  createNewProject,
  getAllProjects,
  getSingleProject,
  updateExistingProject,
  deleteExistingProject,
} from "./project.service.js";

import ApiResponse from "../../utils/ApiResponse.js";

export const createProject = async (req, res, next) => {
  try {
    const project = await createNewProject(req.body, req.user._id);

    return ApiResponse.success(
      res,
      201,
      "Project created successfully",
      project
    );
  } catch (error) {
    next(error);
  }
};

export const getProjects = async (req, res, next) => {
  try {
    const projects = await getAllProjects(req.user._id);

    return ApiResponse.success(
      res,
      200,
      "Projects fetched successfully",
      projects
    );
  } catch (error) {
    next(error);
  }
};

export const getProject = async (req, res, next) => {
  try {
    const project = await getSingleProject(
      req.params.id,
      req.user._id
    );

    return ApiResponse.success(
      res,
      200,
      "Project fetched successfully",
      project
    );
  } catch (error) {
    next(error);
  }
};

export const updateProject = async (req, res, next) => {
  try {
    const project = await updateExistingProject(
      req.params.id,
      req.user._id,
      req.body
    );

    return ApiResponse.success(
      res,
      200,
      "Project updated successfully",
      project
    );
  } catch (error) {
    next(error);
  }
};

export const deleteProject = async (req, res, next) => {
  try {
    await deleteExistingProject(
      req.params.id,
      req.user._id
    );

    return ApiResponse.success(
      res,
      200,
      "Project deleted successfully"
    );
  } catch (error) {
    next(error);
  }
};