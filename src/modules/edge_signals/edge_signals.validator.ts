import { body, check } from "express-validator";

export const createEdgeSignalValidator = [
    check('category').trim().not().isEmpty().withMessage('category is required').isMongoId().withMessage("category is invalid"),
]

export const createEdgeCategoryValidator = [
    body('name').trim().not().isEmpty().withMessage('name is required').isString(),
]