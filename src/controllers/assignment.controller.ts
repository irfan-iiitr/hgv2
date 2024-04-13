import { uploadImage } from "../config/cloudinary.config";
import assignmentServices from "../services/assignment.services";
import type { createAssignmentRequest } from "../typeDefs/app-request";
import { Request, Response } from "express";

const createAssignment = async (
  req: createAssignmentRequest,
  res: Response,
) => {
  try {
    if (req.file) {
      const imageUrl = await uploadImage(req.file);
      req.body.image = imageUrl;
    }
    const assignment = await assignmentServices.createAssignment(req.body);
    return res.status(201).json({
      data: assignment,
      message: "Assignment created successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to create Assignment",
      success: false,
      err: { error },
    });
  }
};

const getAssignmentById = async (req: Request, res: Response) => {
  try {
    const assignment = await assignmentServices.getAssignmentById(
      req.params.id,
    );
    return res.status(200).json({
      data: assignment,
      message: "Assignment Retrieved Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to retrieve Assignment",
      success: false,
      err: { error },
    });
  }
};

const getAllAssignments = async (req: Request, res: Response) => {
  try {
    const assignment = await assignmentServices.getAllAssignments();
    return res.status(200).json({
      data: assignment,
      message: "All Assignments Retrieved Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to retrieve Assignments",
      success: false,
      err: { error },
    });
  }
};

const updateAssignment = async (req: Request, res: Response) => {
  try {
    if (req.file) {
      const imageUrl = await uploadImage(req.file);
      req.body.image = imageUrl;
    }
    const assignment = await assignmentServices.updateAssignment(
      req.params.id,
      req.body,
    );
    return res.status(200).json({
      data: assignment,
      message: "Assignment Updated Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to update Assignment",
      success: false,
      err: { error },
    });
  }
};

const deleteAssignment = async (req: Request, res: Response) => {
  try {
    const assignment = await assignmentServices.deleteAssignment(req.params.id);
    return res.status(200).json({
      data: assignment,
      message: "Assignment Deleted Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to delete Assignment",
      success: false,
      err: { error },
    });
  }
};

const getAllAssignmentsByLevelId = async (req: Request, res: Response) => {
  try {
    const assignment = await assignmentServices.getAllAssignmentsByLevelId(
      req.params.levelId,
    );
    return res.status(200).json({
      data: assignment,
      message: "All Assignments Retrieved Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to retrieve Assignments",
      success: false,
      err: { error },
    });
  }
};

export {
  createAssignment,
  getAssignmentById,
  updateAssignment,
  deleteAssignment,
  getAllAssignments,
  getAllAssignmentsByLevelId,
};
