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
const addCordinator = async (id: string, data: { id: ObjectId }) => {
  try {
    const wing = await wingsRepository.getWingById(id);
    if (!wing) {
      throw new Error("Wing not found");
    }
    let coordinators = [...wing.coordinators];
    coordinators.push(data.id);
    const updatedData = { ...wing, coordinators: coordinators };
    return await updateWing(id, updatedData);
  } catch (error) {
    console.log("There is error in Wing - Service layer");
    throw error;
  }
};

const updateCordinators = async (
  id: string,
  data: { oldId: string; newId: string },
) => {
  try {
    const wing = await wingsRepository.getWingById(id);
    if (!wing) {
      throw new Error("Wing not found");
    }
    const coordinators = [...wing.coordinators];
    const index = coordinators.findIndex(
      (coordinatorId) => coordinatorId.toString() === data.oldId,
    );
    if (index !== -1) {
      coordinators[index] = new ObjectId(data.newId);
    } else throw new Error("Coordinator not found");
    const updatedData = { ...wing, coordinators: coordinators };
    return await updateWing(id, updatedData);
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
  addCordinator,
  updateCordinators,
};
