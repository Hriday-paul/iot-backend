
export interface IEdgeCategories {
    icon: string,
    name: string
}

import { model, Schema } from 'mongoose';


const edge_categories_Schema = new Schema<IEdgeCategories>(
    {
        icon: { type: String, requird: true },
        name: { type: String, requird: true },
    },
    {
        timestamps: true,
    },
);

const Edge_Categories = model<IEdgeCategories>('edge_categories', edge_categories_Schema);

export default Edge_Categories;
