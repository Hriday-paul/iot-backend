import { model, Schema } from 'mongoose';
import { IEdgeSignals } from './edge_signals.interface';


const edge_signal_Schema = new Schema<IEdgeSignals>(
    {
        category: { type:  Schema.Types.ObjectId, requird: true, ref : "edge_categories" },
        user: {
            type: Schema.Types.ObjectId,
            ref: "users",
        },
    },
    {
        timestamps: true,
    },
);

const Edge_Signals = model<IEdgeSignals>('edge_signals', edge_signal_Schema);

export default Edge_Signals;
