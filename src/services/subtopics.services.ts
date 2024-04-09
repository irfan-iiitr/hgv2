import { subtopicsRepository } from "../repositories";
import { InterfaceSubtopic } from "../models/subtopics.model";

const createSubtopic = async (
  data: InterfaceSubtopic,
): Promise<InterfaceSubtopic | null> => {
  try {
    const response = await subtopicsRepository.createSubtopic(data);
    return response;
  } catch (error) {
    console.log("There is an error in Subtopic - Services Layer", error);
    throw error;
  }
};

const getSubtopicById = async (
  id: string,
): Promise<InterfaceSubtopic | null> => {
  try {
    const response = await subtopicsRepository.getSubtopicById(id);
    return response;
  } catch (error) {
    console.log("There is an error in Subtopic - Services Layer", error);
    throw error;
  }
};

const updateSubtopic = async (
  id: string,
  data: any,
): Promise<InterfaceSubtopic | null> => {
  try {
    const response = await subtopicsRepository.updateSubtopic(id, data);
    return response;
  } catch (error) {
    console.log("There is an error in Subtopic - Services Layer", error);
    throw error;
  }
};

const deleteSubtopic = async (
  id: string,
): Promise<InterfaceSubtopic | null> => {
  try {
    const response = await subtopicsRepository.deleteSubtopic(id);
    return response;
  } catch (error) {
    console.log("There is an error in deleteSubtopic - Services Layer");
    throw error;
  }
};

const getAllSubtopics = async (): Promise<InterfaceSubtopic[] | null> => {
  try {
    const response = await subtopicsRepository.getAllSubtopics();
    return response;
  } catch (error) {
    console.log("There is an error in getAllSubtopics - Services Layer");
    throw error;
  }
};

const getSubtopicsByTopicId = async (
  topicId: string,
): Promise<InterfaceSubtopic[] | null> => {
  try {
    const response = await subtopicsRepository.getSubtopicsByTopicId(topicId);
    return response;
  } catch (error) {
    console.log("There is an error in getSubtopicsByTopicId - Services Layer");
    throw error;
  }
};

export default {
  createSubtopic,
  getSubtopicById,
  updateSubtopic,
  deleteSubtopic,
  getAllSubtopics,
  getSubtopicsByTopicId,
};
