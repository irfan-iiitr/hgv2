import { topicsRepository } from "../repositories";
import { InterfaceTopic } from "../models/topics.model";

const createTopic = async (
  data: InterfaceTopic,
): Promise<InterfaceTopic | null> => {
  try {
    const response = await topicsRepository.createTopic(data);
    return response;
  } catch (error) {
    console.log("There is Error in Topic - Services Layer", error);
    throw error;
  }
};

const getTopicById = async (id: string): Promise<InterfaceTopic | null> => {
  try {
    const response = await topicsRepository.getTopicById(id);
    return response;
  } catch (error) {
    console.log("There is Error in Topic - Services Layer", error);
    throw error;
  }
};

const updateTopic = async (
  id: string,
  data: any,
): Promise<InterfaceTopic | null> => {
  try {
    const response = await topicsRepository.updateTopic(id, data);
    return response;
  } catch (error) {
    console.log("There is Error in Topic - Services Layer", error);
    throw error;
  }
};

const deleteTopic = async (id: string): Promise<InterfaceTopic | null> => {
  try {
    const response = await topicsRepository.deleteTopic(id);
    return response;
  } catch (error) {
    console.log("There is an error in deleteTopic - Services Layer");
    throw error;
  }
};

const getAllTopics = async (): Promise<InterfaceTopic[] | null> => {
  try {
    const response = await topicsRepository.getAllTopics();
    return response;
  } catch (error) {
    console.log("There is an error in getAllTopics - Services Layer");
    throw error;
  }
};

export default {
  createTopic,
  getTopicById,
  updateTopic,
  deleteTopic,
  getAllTopics,
};
