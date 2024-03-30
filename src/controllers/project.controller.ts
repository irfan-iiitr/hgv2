import { projectServices } from "../services";
import type { createProjectRequest } from "../typeDefs/app-request";
import { Response, Request } from "express";

const createProject = async (req: createProjectRequest, res: Response) => {
  try {
    const project = await projectServices.createProject(req.body);
    return res.status(201).json({
      data: project,
      message: "Project created successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to create Project",
      success: false,
      err: { error },
    });
  }
};

const getProjectById = async (req: Request, res: Response) => {
  try {
    const project = await projectServices.getProjectById(req.params.id);
    return res.status(200).json({
      data: project,
      message: "Project Retrieved Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to retrieve Project",
      success: false,
      err: { error },
    });
  }
};

const getAllProjects = async (req: Request, res: Response) => {
  try {
    const project = await projectServices.getAllProjects();
    return res.status(200).json({
      data: project,
      message: "All Projects Retrieved Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to retrieve Projects",
      success: false,
      err: { error },
    });
  }
};

const updateProject = async (req: Request, res: Response) => {
  try {
    const project = await projectServices.updateProject(
      req.params.id,
      req.body,
    );
    return res.status(200).json({
      data: project,
      message: "Project Updated Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to update Projects",
      success: false,
      err: { error },
    });
  }
};

const deleteProject = async (req: Request, res: Response) => {
  try {
    const project = await projectServices.deleteProject(req.params.id);
    return res.status(200).json({
      data: project,
      message: "Project Deleted Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to delete Projects",
      success: false,
      err: { error },
    });
  }
};

export {
  createProject,
  getProjectById,
  getAllProjects,
  updateProject,
  deleteProject,
};
