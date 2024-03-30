import { Request } from "express";
import InterfaceUser from "../models/user.model";
import InterfaceFeed from "../models/feed.model";
import InterfaceAnnoucement from "../models/annoucement.model";
import InterfaceAssignment from "../models/assignment.model";
import InterfaceProject from "../models/project.model";
import { InterfaceWing } from "../models/wings.model";

export interface createUserRequest extends Request {
  body: InterfaceUser;
}

export interface signInRequest extends Request {
  body: {
    email: string;
    password: string;
  };
}

export interface createFeedRequest extends Request {
  body: InterfaceFeed;
}

export interface createAnnoucementRequest extends Request {
  body: InterfaceAnnoucement;
}

export interface createAssignmentRequest extends Request {
  body: InterfaceAssignment;
}

export interface createWingRequest extends Request {
  body: InterfaceWing;
}

export interface createProjectRequest extends Request {
  body: InterfaceProject;
}
