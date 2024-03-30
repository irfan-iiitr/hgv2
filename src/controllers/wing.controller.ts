import wingServices from "../services/wing.services";
import { createWingRequest } from "../typeDefs/app-request";
import { Response, Request } from "express";

const createWing = async (req: createWingRequest, res: Response) => {
  try {
    if (
      !req.body.name === null ||
      req.body.description === null ||
      req.body.name === "" ||
      req.body.description === ""
    ) {
      throw new Error("Name and Description are required fields");
    }

    const response = await wingServices.createWing(req.body);
    return res.status(201).json({
      data: response,
      message: "Wing created successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      data: {},
      message: error?.message || "Wing creation failed",
      success: false,
      err: error,
    });
  }
};

const getWing = async (req: Request, res: Response) => {
  try {
    const response = await wingServices.getWingById(req.params.id);

    return res.status(200).json({
      data: response,
      message: "Wing retrieved successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      data: {},
      message: error?.message || "Failed to retrieve Wing",
      success: false,
      err: error,
    });
  }
};

const updateWing = async (req: Request, res: Response) => {
  try {
    const response = await wingServices.updateWing(req.params.id, req.body);

    return res.status(200).json({
      data: response,
      message: "Wing updated successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      data: {},
      message: error?.message || "Failed to update Wing",
      success: false,
      err: error,
    });
  }
};

const deleteWing = async (req: Request, res: Response) => {
  try {
    const response = await wingServices.deleteWing(req.params.id);

    return res.status(200).json({
      data: response,
      message: "Wing deleted successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      data: {},
      message: error?.message || "Failed to delete Wing",
      success: false,
      err: error,
    });
  }
};

const getAllWings = async (req: Request, res: Response) => {
  try {
    const response = await wingServices.getAllWings();

    return res.status(200).json({
      data: response,
      message: "All Wings retrieved successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    console.log("There is Error in Wing - Controller Layer");

    return res.status(501).json({
      data: {},
      message: error?.message || "Failed to retrieve Wings",
      success: false,
      err: error,
    });
  }
};

export { createWing, getWing, updateWing, deleteWing, getAllWings };
