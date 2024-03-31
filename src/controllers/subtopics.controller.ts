import { subtopicsServices } from "../services";
import { Request, Response } from "express";
import { createSubtopicsRequest } from "../typeDefs/app-request";

const createSubtopic = async (req: createSubtopicsRequest, res: Response) => {
  try {
    const subtopic = await subtopicsServices.createSubtopic(req.body);
    return res.status(201).json({
      data: subtopic,
      message: "Subtopic created successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to create Subtopic",
      success: false,
      err: { error },
    });
  }
};

const getSubtopicById = async (req: Request, res: Response) => {
  try {
    const subtopic = await subtopicsServices.getSubtopicById(req.params.id);
    return res.status(200).json({
      data: subtopic,
      message: "Subtopic Retrieved Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to retrieve Subtopic",
      success: false,
      err: { error },
    });
  }
};

const updateSubtopic = async (req: Request, res: Response) => {
  try {
    const subtopic = await subtopicsServices.updateSubtopic(
      req.params.id,
      req.body,
    );
    return res.status(200).json({
      data: subtopic,
      message: "Subtopic Updated Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to update Subtopic",
      success: false,
      err: { error },
    });
  }
};

const deleteSubtopic = async (req: Request, res: Response) => {
  try {
    const subtopic = await subtopicsServices.deleteSubtopic(req.params.id);
    return res.status(200).json({
      data: subtopic,
      message: "Subtopic Deleted Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to delete Subtopic",
      success: false,
      err: { error },
    });
  }
};

const getAllSubtopics = async (req: Request, res: Response) => {
  try {
    const subtopics = await subtopicsServices.getAllSubtopics();
    return res.status(200).json({
      data: subtopics,
      message: "Subtopics Retrieved Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to retrieve Subtopics",
      success: false,
      err: { error },
    });
  }
};

export {
  createSubtopic,
  getSubtopicById,
  updateSubtopic,
  deleteSubtopic,
  getAllSubtopics,
};
