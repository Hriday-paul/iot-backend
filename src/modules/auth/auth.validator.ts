import { check } from 'express-validator';

export const createAccountValidator = [
    check('first_name').trim().not().isEmpty().withMessage('first_name is required').isString().isLength({ min: 2 }).withMessage('first_name min length is 2'),
    check('email').trim().escape().not().isEmpty().withMessage('Email is required').isEmail().normalizeEmail({ all_lowercase: true }).withMessage('Invalid Email'),
    check('contact').optional().trim().isMobilePhone('any').withMessage('Invalid contact number'), //.isMobilePhone('any').withMessage('Invalid contact number')
    check('date_of_birth').optional().trim().isISO8601().toDate().withMessage('Invalid date of birth format'),
]

export const loginAccountValidator = [
    check('email').trim().escape().not().isEmpty().withMessage('Email is required').isEmail().normalizeEmail({ all_lowercase: true }).withMessage('Invalid Email'),
    check('password').trim().not().isEmpty().withMessage('password is required').isString(),
]

export const social_loginAccountValidator = [
    check('email').trim().not().isEmpty().withMessage('Email is required').isEmail().normalizeEmail({ all_lowercase: true }).withMessage('Invalid Email'),
    check('image').trim().not().isEmpty().withMessage('image is required').isString(),
    check('first_name').trim().not().isEmpty().withMessage('first_name is required').isString(),
]

export const refreshTokenValidator = [
    check('refreshToken').trim().not().isEmpty().withMessage('refreshToken is required').isString(),
]

export const forgotPasswordValidator = [
    check('email').trim().not().isEmpty().withMessage('Email is required').isEmail().normalizeEmail({ all_lowercase: true }).withMessage('Invalid Email'),
]

export const resetPasswordValidator = [
    check('newPassword').trim().escape().not().isEmpty().withMessage('newPassword is required'),
    check('confirmPassword').trim().escape().not().isEmpty().withMessage('confirmPassword is required'),
]

export const changePasswordValidator = [
    check('oldPassword').trim().escape().not().isEmpty().withMessage('oldPassword is required').isString(),
    check('newPassword').trim().escape().not().isEmpty().withMessage('newPassword is required').isString(),
    check('confirmPassword').trim().escape().not().isEmpty().withMessage('confirmPassword is required').isString(),
]