import assignmentRepository from "../repositories/assignment.repository";
import InterfaceAssignment from "../models/assignment.model";

const createAssignment = async (
  data: InterfaceAssignment,
): Promise<InterfaceAssignment | null> => {
  try {
    const response = await assignmentRepository.createAssignment(data);
    return response;
  } catch (error) {
    console.log("There is Error in Assignment - Services Layer");
    throw error;
  }
};

const getAssignmentById = async (
  id: string,
): Promise<InterfaceAssignment | null> => {
  try {
    const response = await assignmentRepository.getAssignmentById(id);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in getting Assignment by ID - Services Layer");
    throw error;
  }
};

const getAllAssignments = async (): Promise<InterfaceAssignment[] | null> => {
  try {
    const response = await assignmentRepository.getAllAssignments();
    return response;
  } catch (error: unknown) {
    console.log("There is Error in getting All Assignments - Services Layer");
    throw error;
  }
};

const updateAssignment = async (
  id: string,
  data: Partial<InterfaceAssignment>,
): Promise<InterfaceAssignment | null> => {
  try {
    const response = await assignmentRepository.updateAssignment(id, data);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in updating Assignment - Services Layer");
    throw error;
  }
};

const deleteAssignment = async (
  id: string,
): Promise<InterfaceAssignment | null> => {
  try {
    const response = await assignmentRepository.deleteAssignment(id);
    return response;
  } catch (error: unknown) {
    console.log("There is Error in deleting Assignment - Services Layer");
    throw error;
  }
};

const getAllAssignmentsByLevelId = async (
  levelId: string,
): Promise<InterfaceAssignment[] | null> => {
  try {
    const response =
      await assignmentRepository.getAllAssignmentsByLevelId(levelId);
    return response;
  } catch (error: unknown) {
    console.log(
      "There is Error in getting Assignment by LevelId - Services Layer",
    );
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
