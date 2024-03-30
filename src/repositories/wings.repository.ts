import { Wing } from "../models/wings.model";

const createWing = async (data: any) => {
  try {
    const response = await Wing.create(data);

    return response.toObject();
  } catch (error: unknown) {
    console.log("There is Error in Wing - Repository Layer");
    throw error;
  }
};

const getWingById = async (id: string) => {
  try {
    const response = await Wing.findById(id).lean().exec();
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Wing - Repository Layer");
    throw error;
  }
};

const updateWing = async (id: string, data: any) => {
  try {
    const response = await Wing.findByIdAndUpdate(id, data, { new: true })
      .lean()
      .exec();
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Wing - Repository Layer");
    throw error;
  }
};

const deleteWing = async (id: string) => {
  try {
    const response = await Wing.findByIdAndDelete(id).lean().exec();
    return response;
  } catch (error) {
    console.log("There is Error in Wing - Repository Layer");
    throw error;
  }
};

const getAllWings = async () => {
  try {
    const response = await Wing.find()
      .populate({ path: "lead", select: "-password" })
      // .populate("levels")
      // .populate({ path: "coordinators", select: "-password" })
      .lean()
      .exec();

    return response;
  } catch (error) {
    console.log("There is Error in Wing - Repository Layer");
    throw error;
  }
};

export default {
  createWing,
  getWingById,
  updateWing,
  deleteWing,
  getAllWings,
};
