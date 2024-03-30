import { Project } from "../models/project.model";

const createProject = async (data: any) => {
  try {
    const response = await Project.create(data);
    return response;
  } catch (error: unknown) {
    console.log("There is an error in Project - Repository Layer");
    throw error;
  }
};

const getProjectById = async (id: string) => {
  try {
    const response = await Project.findById(id).lean().exec();
    return response;
  } catch (error: unknown) {
    console.log("There is an error in Project - Repository Layer");
    throw error;
  }
};

const getAllProjects = async () => {
  try {
    const response = await Project.find({}).lean().exec();
    return response;
  } catch (error: unknown) {
    console.log("There is an error in Project - Repository Layer");
    throw error;
  }
};

const updateProject = async (id: string, data: any) => {
  try {
    const response = await Project.findByIdAndUpdate(id, data, { new: true })
      .lean()
      .exec();
    return response;
  } catch (error: unknown) {
    console.log("There is an error in Project - Repository Layer");
    throw error;
  }
};

const deleteProject = async (id: string) => {
  try {
    const response = await Project.findByIdAndDelete(id).lean().exec();
    return response;
  } catch (error) {
    console.log("There is an error in Project - Repository Layer");
    throw error;
  }
};

export default {
  createProject,
  getProjectById,
  updateProject,
  deleteProject,
  getAllProjects,
};
