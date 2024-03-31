import { InterfaceTopic } from "../models/topics.model";
import { Topic } from "../models/topics.model";

const createTopic = async (
  data: InterfaceTopic,
): Promise<InterfaceTopic | null> => {
  try {
    const response = await Topic.create(data);
    return response;
  } catch (error) {
    console.log("There is Error in Topic - Repository Layer", error);
    throw error;
  }
};

const getTopicById = async (id: string): Promise<InterfaceTopic | null> => {
  try {
    const response = await Topic.findById(id).lean().exec();
    return response;
  } catch (error) {
    console.log("There is Error in Topic - Repository Layer", error);
    throw error;
  }
};

const updateTopic = async (
  id: string,
  data: any,
): Promise<InterfaceTopic | null> => {
  try {
    const response = await Topic.findByIdAndUpdate(id, data, {
      new: true,
    }).exec();
    return response;
  } catch (error) {
    console.log("There is Error in Topic - Repository Layer", error);
    throw error;
  }
};

const deleteTopic = async (id: string): Promise<InterfaceTopic | null> => {
  try {
    const response = await Topic.findByIdAndDelete(id).exec();
    return response;
  } catch (error) {
    console.log("There is Error in Topic - Repository Layer", error);
    throw error;
  }
};

const getAllTopics = async (): Promise<InterfaceTopic[] | null> => {
  try {
    const response = await Topic.find({}).lean().exec();
    return response;
  } catch (error) {
    console.log("There is Error in Topic - Repository Layer", error);
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
