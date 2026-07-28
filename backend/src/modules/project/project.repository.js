import Project from "./project.model.js";

export const createProject = async (projectData) => {
  return await Project.create(projectData);
};

export const getProjectsByOwner = async (ownerId) => {
  return await Project.find({ owner: ownerId }).sort({
    createdAt: -1,
  });
};

export const getProjectById = async (projectId) => {
  return await Project.findById(projectId);
};

export const getProjectByIdAndOwner = async (projectId, ownerId) => {
  return await Project.findOne({
    _id: projectId,
    owner: ownerId,
  });
};

export const updateProject = async (
  projectId,
  ownerId,
  updateData
) => {
  return await Project.findOneAndUpdate(
    {
      _id: projectId,
      owner: ownerId,
    },
    updateData,
    {
      new: true,
      runValidators: true,
    }
  );
};

export const deleteProject = async (
  projectId,
  ownerId
) => {
  return await Project.findOneAndDelete({
    _id: projectId,
    owner: ownerId,
  });
};