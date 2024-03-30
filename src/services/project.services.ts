import projectRepository from "../repositories/project.repository";
import { InterfaceProject } from "../models/project.model";

const createProject = async (
  data: InterfaceProject,
): Promise<InterfaceProject | null> => {
  try {
    const response = await projectRepository.createProject(data);
    return response;
  } catch (error) {
    console.log("There is an error in Project - Services Layer");
    throw error;
  }
};

const getProjectById = async (id: string): Promise<InterfaceProject | null> => {
  try {
    const response = await projectRepository.getProjectById(id);
    return response;
  } catch (error: unknown) {
    console.log("There is an error in getting Project by ID - Services Layer");
    throw error;
  }
};

const getAllProjects = async (): Promise<InterfaceProject[] | null> => {
  try {
    const response = await projectRepository.getAllProjects();
    return response;
  } catch (error: unknown) {
    console.log("There is an error in getting All Projects - Services Layer");
    throw error;
  }
};

const updateProject = async (
  id: string,
  data: Partial<InterfaceProject>,
): Promise<InterfaceProject | null> => {
  try {
    const response = await projectRepository.updateProject(id, data);
    return response;
  } catch (error: unknown) {
    console.log("There is an error in updating Project - Services Layer");
    throw error;
  }
};

const deleteProject = async (id: string): Promise<InterfaceProject | null> => {
  try {
    const response = await projectRepository.deleteProject(id);
    return response;
  } catch (error) {
    console.log("There is an error in deleting Project - Services Layer");
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
