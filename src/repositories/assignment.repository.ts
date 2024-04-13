import { level } from "winston";
import { Assignment } from "../models/assignment.model";

const createAssignment = async (data: any) => {
  try {
    const response = await Assignment.create(data);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Assignment - Repository Layer");
    throw error;
  }
};

const getAssignmentById = async (id: string) => {
  try {
    const response = await Assignment.findById(id).lean().exec();
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Assignment - Repository Layer");
    throw error;
  }
};

const getAllAssignments = async () => {
  try {
    const response = await Assignment.find({}).lean().exec();
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Assignment - Repository Layer");
    throw error;
  }
};

const updateAssignment = async (id: string, data: any) => {
  try {
    const response = await Assignment.findByIdAndUpdate(id, data, { new: true })
      .lean()
      .exec();
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Assignment - Repository Layer");
    throw error;
  }
};

const deleteAssignment = async (id: string) => {
  try {
    const response = await Assignment.findByIdAndDelete(id).lean().exec();
    return response;
  } catch (error) {
    console.log("There is Error in Assignment - Repository Layer");
    throw error;
  }
};

const getAllAssignmentsByLevelId = async (levelId: string) => {
  try {
    const response = await Assignment.find({ levelId }).lean().exec();
    return response;
  } catch (error) {
    console.log("There is Error in Assignment - Repository Layer");
    throw error;
  }
};

export default {
  createAssignment,
  getAssignmentById,
  updateAssignment,
  deleteAssignment,
  getAllAssignments,
  getAllAssignmentsByLevelId,
};
