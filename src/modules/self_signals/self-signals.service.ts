import { ISelfSignals } from "./self_signals.interface";
import Self_Signals from "./self_signals.module";

const addSelf_signal = async (payload: ISelfSignals, user: string) => {
    const result = await Self_Signals.insertOne({ ...payload, user });
    return result;
};

const getMySelf_signal = async (user: string) => {
    const result = await Self_Signals.find({ user });
    return result;
};

export const self_signals_service = {
    addSelf_signal,
    getMySelf_signal
}