import { InterfaceLevel } from "../models/level.model";
import { Level } from "../models/level.model";

const createLevel = async (
  data: InterfaceLevel,
): Promise<InterfaceLevel | null> => {
  try {
    const response = await Level.create(data);
    return response.toObject();
  } catch (error) {
    console.log("There is Error in Level - Repository Layer", error);
    throw error;
  }
};

const getLevelById = async (id: string): Promise<InterfaceLevel | null> => {
  try {
    const response = await Level.findById(id).lean().exec();
    return response;
  } catch (err) {
    console.log("There is an error in getLevelById - Repository Layer");
    throw err;
  }
};

const updateLevel = async (
  id: string,
  data: any,
): Promise<InterfaceLevel | null> => {
  try {
    const response = await Level.findByIdAndUpdate(id, data, { new: true })
      .lean()
      .exec();
    return response;
  } catch (e) {
    console.log("There is an error in updateLevel - Repository Layer");
    throw e;
  }
};

const deleteLevel = async (id: string): Promise<InterfaceLevel | null> => {
  try {
    const response = await Level.findByIdAndDelete(id).lean().exec();
    return response;
  } catch (e) {
    console.log("There is an error in deleteLevel - Repository Layer");
    throw e;
  }
};

const getAllLevels = async (): Promise<InterfaceLevel[] | null> => {
  try {
    const response = await Level.find({}).lean().exec();
    return response;
  } catch (e) {
    console.log("There is an error in getAllLevels - Repository Layer");
    throw e;
  }
};

export default {
  getLevelById,
  updateLevel,
  deleteLevel,
  getAllLevels,
  createLevel,
};
