import config from "../../config";
import AppError from "../../error/AppError";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { edge_categories_service } from "./edge_categories.service";
import httpStatus from "http-status"

// get all edge_signal category
const getEdge_signal_categories = catchAsync(async (req, res) => {
    const result = await edge_categories_service.getEdge_signal_categories()
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Edge Signal categories retrived successfully',
        data: result,
    });
})

// add or update edge signal
const addEdge_category = catchAsync(async (req, res) => {

    req.body.icon = req.file?.filename ? (config.BASE_URL + '/images/' + req.file.filename) : ""

    if (!req.body?.icon) {
        throw new AppError(
            httpStatus.BAD_REQUEST,
            'icon field is required',
        );
    }

    const result = await edge_categories_service.addEdge_category(req.body, req?.user?._id);

    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Edge Categories added successfully',
        data: result,
    });
})

export const edge_categories_controller = {
    getEdge_signal_categories,
    addEdge_category
}