import { InterfaceSubtopic } from "../models/subtopics.model";
import { Subtopic } from "../models/subtopics.model";

const createSubtopic = async (
  data: InterfaceSubtopic,
): Promise<InterfaceSubtopic | null> => {
  try {
    const response = await Subtopic.create(data);
    return response;
  } catch (error) {
    console.log("There is an error in Subtopic - Repository Layer", error);
    throw error;
  }
};

const getSubtopicById = async (
  id: string,
): Promise<InterfaceSubtopic | null> => {
  try {
    const response = await Subtopic.findById(id).lean().exec();
    return response;
  } catch (error) {
    console.log("There is an error in Subtopic - Repository Layer", error);
    throw error;
  }
};

const updateSubtopic = async (
  id: string,
  data: any,
): Promise<InterfaceSubtopic | null> => {
  try {
    const response = await Subtopic.findByIdAndUpdate(id, data, {
      new: true,
    }).exec();
    return response;
  } catch (error) {
    console.log("There is an error in Subtopic - Repository Layer", error);
    throw error;
  }
};

const deleteSubtopic = async (
  id: string,
): Promise<InterfaceSubtopic | null> => {
  try {
    const response = await Subtopic.findByIdAndDelete(id).exec();
    return response;
  } catch (error) {
    console.log("There is an error in Subtopic - Repository Layer", error);
    throw error;
  }
};

const getAllSubtopics = async (): Promise<InterfaceSubtopic[] | null> => {
  try {
    const response = await Subtopic.find({}).lean().exec();
    return response;
  } catch (error) {
    console.log("There is an error in Subtopic - Repository Layer", error);
    throw error;
  }
};

export default {
  createSubtopic,
  getSubtopicById,
  updateSubtopic,
  deleteSubtopic,
  getAllSubtopics,
};
