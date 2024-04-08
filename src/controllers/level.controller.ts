import { levelServices } from "../services";
import { Request, Response } from "express";
import { createLevelRequest } from "../typeDefs/app-request";

const createLevel = async (req: createLevelRequest, res: Response) => {
  try {
    const level = await levelServices.createLevel(req.body);
    return res.status(201).json({
      data: level,
      message: "Level created successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to create Level",
      success: false,
      err: { error },
    });
  }
};

const getLevelById = async (req: Request, res: Response) => {
  try {
    const level = await levelServices.getLevelById(req.params.id);
    return res.status(200).json({
      data: level,
      message: "Level Retrieved Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to retrieve Level",
      success: false,
      err: { error },
    });
  }
};

const updateLevel = async (req: Request, res: Response) => {
  try {
    const level = await levelServices.updateLevel(req.params.id, req.body);
    return res.status(200).json({
      data: level,
      message: "Level Updated Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to update Level",
      success: false,
      err: { error },
    });
  }
};

const deleteLevel = async (req: Request, res: Response) => {
  try {
    const level = await levelServices.deleteLevel(req.params.id);
    return res.status(200).json({
      data: level,
      message: "Level Deleted Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to delete Level",
      success: false,
      err: { error },
    });
  }
};

const getAllLevels = async (req: Request, res: Response) => {
  try {
    const level = await levelServices.getAllLevels();
    return res.status(200).json({
      data: level,
      message: "All Levels Retrieved Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to retrieve Levels",
      success: false,
      err: { error },
    });
  }
};

const getAllLevelsByWingId = async (req: Request, res: Response) => {
  try {
    const levels = await levelServices.getAllLevelsByWingId(req.params.id);
    return res.status(200).json({
      data: levels,
      message: "All Levels Retrieved Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to retrieve Levels",
      success: false,
      err: { error },
    });
  }
};

export {
  createLevel,
  getLevelById,
  updateLevel,
  deleteLevel,
  getAllLevels,
  getAllLevelsByWingId,
};
