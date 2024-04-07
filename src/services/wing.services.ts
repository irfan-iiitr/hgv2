import { Wing } from "../models/wings.model";
import wingsRepository from "../repositories/wings.repository";
import { ObjectId } from "mongodb";

const createWing = async (data: any) => {
  try {
    const response = await wingsRepository.createWing(data);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Wing - Services Layer");
    throw error;
  }
};

const getWingById = async (id: string) => {
  try {
    const response = await wingsRepository.getWingById(id);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Wing - Services Layer");
    throw error;
  }
};

const updateWing = async (id: string, data: any) => {
  try {
    const response = await wingsRepository.updateWing(id, data);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Wing - Services Layer");
    throw error;
  }
};

const deleteWing = async (id: string) => {
  try {
    const response = await wingsRepository.deleteWing(id);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in Wing - Services Layer");
    throw error;
  }
};

const getAllWings = async () => {
  try {
    const response = await wingsRepository.getAllWings();
    return response;
  } catch (error) {
    console.log("There is error in Wing - Service layer");
    throw error;
  }
};
const addCoordinator = async (wingId: string, data: { userId: string }) => {
  try {
    const updatedWing = await wingsRepository.updateWing(wingId, {
      $push: { coordinators: data.userId },
    });
    if (!updatedWing) {
      throw new Error("Wing not found");
    }

    return updatedWing;
  } catch (error) {
    console.log("There is error in Wing - Service layer");
    throw error;
  }
};

const deleteCoordinator = async (wingId: string, data: { userId: string }) => {
  try {
    const updatedWing = await wingsRepository.updateWing(wingId, {
      $pull: { coordinators: data.userId },
    });

    if (!updatedWing) {
      throw new Error("Wing not found or update failed");
    }

    return updatedWing;
  } catch (error) {
    console.log("There is error in Wing - Service layer");
    throw error;
  }
};

export default {
  createWing,
  getWingById,
  updateWing,
  deleteWing,
  getAllWings,
  addCoordinator,
  deleteCoordinator,
};
