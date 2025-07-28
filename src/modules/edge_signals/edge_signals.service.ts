import { IEdgeSignals } from "./edge_signals.interface";
import Edge_Signals from "./edge_signals.module";

const addEdge_signal = async (payload: IEdgeSignals, user: string) => {
    const result = await Edge_Signals.insertOne({ ...payload, user });
    return result;
};

const getMyEdge_signal = async (user: string) => {
    const result = await Edge_Signals.find({ user }).populate("category");
    return result;
};

export const edge_signals_service = {
    addEdge_signal,
    getMyEdge_signal
}