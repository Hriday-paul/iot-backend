import { RequestHandler } from "express";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status"
import { self_signals_service } from "./self-signals.service";


// add or update Self_signal
const addSelf_signal = catchAsync(async (req, res) => {
    const result = await self_signals_service.addSelf_signal(req.body, req?.user?._id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'Self Signals added successfully',
        data: result,
    });
})

// get my Self_signal
const getMySelf_signal = catchAsync(async (req, res) => {
    const result = await self_signals_service.getMySelf_signal(req?.user?._id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: 'My Self Signal retrived successfully',
        data: result,
    });
})

export const self_signal_controller = {
    addSelf_signal,
    getMySelf_signal
}