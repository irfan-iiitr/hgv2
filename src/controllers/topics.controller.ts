import { topicsServices } from "../services";
import { Request, Response } from "express";
import { createTopicsRequest } from "../typeDefs/app-request";

const createTopic = async (req: createTopicsRequest, res: Response) => {
  try {
    const topics = await topicsServices.createTopic(req.body);
    return res.status(201).json({
      data: topics,
      message: "Topics created successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to create Topics",
      success: false,
      err: { error },
    });
  }
};

const getTopicsById = async (req: Request, res: Response) => {
  try {
    const topics = await topicsServices.getTopicById(req.params.id);
    return res.status(200).json({
      data: topics,
      message: "Topics Retrieved Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to retrieve Topics",
      success: false,
      err: { error },
    });
  }
};

const updateTopic = async (req: Request, res: Response) => {
  try {
    const topics = await topicsServices.updateTopic(req.params.id, req.body);
    return res.status(200).json({
      data: topics,
      message: "Topics Updated Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to update Topics",
      success: false,
      err: { error },
    });
  }
};

const deleteTopic = async (req: Request, res: Response) => {
  try {
    const topics = await topicsServices.deleteTopic(req.params.id);
    return res.status(200).json({
      data: topics,
      message: "Topics Deleted Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to delete Topics",
      success: false,
      err: { error },
    });
  }
};

const getAllTopic = async (req: Request, res: Response) => {
  try {
    const topics = await topicsServices.getAllTopics();
    return res.status(200).json({
      data: topics,
      message: "Topics Retrieved Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to retrieve Topics",
      success: false,
      err: { error },
    });
  }
};

const getTopicsByLevelId = async (req: Request, res: Response) => {
  try {
    const topics = await topicsServices.getTopicsByLevelId(req.params.levelId);
    return res.status(200).json({
      data: topics,
      message: "Topics Retrieved Successfully",
      success: true,
      err: {},
    });
  } catch (error: any) {
    return res.status(501).json({
      message: error.message || "Failed to retrieve Topics",
      success: false,
      err: { error },
    });
  }
};

export {
  createTopic,
  getTopicsById,
  updateTopic,
  deleteTopic,
  getAllTopic,
  getTopicsByLevelId,
};
