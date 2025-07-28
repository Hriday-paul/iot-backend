import { Types } from "mongoose";

export interface IEdgeSignals{
    category : Types.ObjectId,
    user : Types.ObjectId
}