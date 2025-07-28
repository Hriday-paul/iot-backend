import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status"
import { edge_signals_service } from "./edge_signals.service";


// add or update edge signal
const addEdge_signal = catchAsync(async (req, res) => {
    const result = await edge_signals_service.addEdge_signal(req.body, req?.user?._id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Edge Signals added successfully',
        data: result,
    });
})

// get my Self_signal
const getMyEdge_signal = catchAsync(async (req, res) => {
    const result = await edge_signals_service.getMyEdge_signal(req?.user?._id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'My Edge Signal retrived successfully',
        data: result,
    });
})

export const edge_signal_controller = {
    addEdge_signal,
    getMyEdge_signal
}