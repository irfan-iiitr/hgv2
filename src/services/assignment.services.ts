import assignmentRepository from "../repositories/assignment.repository";
import InterfaceAssignment from "../models/assignment.model";
import { ObjectId } from "mongodb";
import { levelRepository } from "../repositories";

const createAssignment = async (
  data: InterfaceAssignment,
): Promise<InterfaceAssignment | null> => {
  try {
    const response = await assignmentRepository.createAssignment(data);
    // Update the Level document to include the new assignment
    await levelRepository.updateLevel(data.levelId, {
      $push: { assignments: new ObjectId(response._id) },
    });
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

const submitAssignment = async (
  id: string,
  userId: string,
  projectURL: string,
): Promise<InterfaceAssignment | null> => {
  try {
    const updatedAssignment = await assignmentRepository.updateAssignment(id, {
      $push: {
        submitted: {
          user: new ObjectId(userId),
          projectURL: projectURL,
          verified: false,
        },
      },
    });

    if (!updatedAssignment) {
      throw new Error("Assignment not found or update failed");
    }

    return updatedAssignment;
  } catch (error: unknown) {
    console.log("There is Error in submitting Assignment - Services Layer");
    throw error;
  }
};

const verifyAssignment = async (
  id: string,
  projectURL: string,
): Promise<InterfaceAssignment | null> => {
  try {
    const assignment = await assignmentRepository.getAssignmentById(id);
    if (!assignment) {
      throw new Error("Assignment not found");
    }
    // Find the index of the submission
    const index = assignment.submitted.findIndex(
      (submission) => submission.projectURL === projectURL,
    );

    if (index === -1) {
      throw new Error("Submission not found");
    }

    // Update the 'verified' field of the submission
    const updatedAssignment = await assignmentRepository.updateAssignment(id, {
      $set: { [`submitted.${index}.verified`]: true },
    });

    if (!updatedAssignment) {
      throw new Error("Assignment not found or update failed");
    }

    return updatedAssignment;
  } catch (error: unknown) {
    console.log("There is Error in verifying Assignment - Services Layer");
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
  submitAssignment,
  verifyAssignment,
};
