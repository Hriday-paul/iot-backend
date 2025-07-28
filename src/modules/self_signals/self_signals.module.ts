import { model, Schema } from 'mongoose';
import { ISelfSignals } from './self_signals.interface';

const self_signal_Schema = new Schema<ISelfSignals>(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
        care_signal: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        interval: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true,
    },
);

const Self_Signals = model<ISelfSignals>('self_signals', self_signal_Schema);

export default Self_Signals;
