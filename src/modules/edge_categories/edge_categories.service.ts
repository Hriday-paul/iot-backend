import Edge_Categories, { IEdgeCategories } from "./edge_categories.model";

const getEdge_signal_categories = async () => {
    const result = await Edge_Categories.find();
    return result;
};

const addEdge_category = async (payload: IEdgeCategories, user: string) => {
    const result = await Edge_Categories.insertOne({ ...payload, user });
    return result;
};

export const edge_categories_service = {
    getEdge_signal_categories,
    addEdge_category,
}