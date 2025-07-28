import { check } from "express-validator";

export const createSelfSignalValidator = [
    check('care_signal').trim().not().isEmpty().withMessage('care_signal is required').isString(),
    check('name').trim().not().isEmpty().withMessage('name is required').isString(),
    check('time').trim().not().isEmpty().withMessage('time is required').isString(),
    check('interval').trim().not().isEmpty().withMessage('interval is required').isString(),
]