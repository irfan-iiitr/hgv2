import { levelRepository } from "../repositories";
import { InterfaceLevel } from "../models/level.model";

const createLevel = async (
  data: InterfaceLevel,
): Promise<InterfaceLevel | null> => {
  try {
    const response = await levelRepository.createLevel(data);
    return response;
  } catch (error) {
    console.log("There is Error in Level - Services Layer", error);
    throw error;
  }
};

const getLevelById = async (id: string): Promise<InterfaceLevel | null> => {
  try {
    const response = await levelRepository.getLevelById(id);
    return response;
  } catch (error) {
    console.log("There is Error in Level - Services Layer", error);
    throw error;
  }
};

const updateLevel = async (
  id: string,
  data: any,
): Promise<InterfaceLevel | null> => {
  try {
    const response = await levelRepository.updateLevel(id, data);
    return response;
  } catch (error) {
    console.log("There is Error in Level - Services Layer", error);
    throw error;
  }
};

const deleteLevel = async (id: string): Promise<InterfaceLevel | null> => {
  try {
    const response = await levelRepository.deleteLevel(id);
    return response;
  } catch (error) {
    console.log("There is Error in Level - Services Layer", error);
    throw error;
  }
};

const getAllLevels = async (): Promise<InterfaceLevel[] | null> => {
  try {
    const response = await levelRepository.getAllLevels();
    return response;
  } catch (error) {
    console.log("There is Error in Level - Services Layer", error);
    throw error;
  }
};

const getAllLevelsByWingId = async (
  wingId: string,
): Promise<InterfaceLevel[]> => {
  try {
    const levels = await levelRepository.getAllLevelsByWingId(wingId);
    return levels;
  } catch (error) {
    console.log("There is Error in Level - Services Layer", error);
    throw error;
  }
};

export default {
  createLevel,
  getLevelById,
  updateLevel,
  deleteLevel,
  getAllLevels,
  getAllLevelsByWingId,
};
