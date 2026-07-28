import AppError from "../../errors/AppError.js";

import {
  createProject,
  getProjectsByOwner,
  getProjectByIdAndOwner,
  updateProject,
  deleteProject,
} from "./project.repository.js";

export const createNewProject = async (projectData, ownerId) => {
  return await createProject({
    ...projectData,
    owner: ownerId,
  });
};

export const getAllProjects = async (ownerId) => {
  return await getProjectsByOwner(ownerId);
};

export const getSingleProject = async (projectId, ownerId) => {
  const project = await getProjectByIdAndOwner(projectId, ownerId);

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  return project;
};

export const updateExistingProject = async (
  projectId,
  ownerId,
  updateData
) => {
  const project = await updateProject(
    projectId,
    ownerId,
    updateData
  );

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  return project;
};

export const deleteExistingProject = async (
  projectId,
  ownerId
) => {
  const project = await deleteProject(
    projectId,
    ownerId
  );

  if (!project) {
    throw new AppError("Project not found", 404);
  }

  return project;
};