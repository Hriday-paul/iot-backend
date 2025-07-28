import { Types } from "mongoose";

export interface ISelfSignals{
    user: Types.ObjectId;
    care_signal : string,
    name : string,
    time : string,
    interval : number
}