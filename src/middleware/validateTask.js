import { body } from 'express-validator';
import { checkValidationResults } from './handleValidationErrors.js';
import { query } from 'express-validator';

export const validateTask = [
  body('title')
    .trim()
    .escape()
    .notEmpty()
    .withMessage('Title is required')
    .bail()
    .isLength({ min: 3, max: 100 })
    .withMessage('Title must be at least 3 and at most 100 characters'),

  body('completed')
    .optional()
    .isBoolean()
    .withMessage('completed must be true or false'),

  checkValidationResults,
];

export const validateGetTasks = [
  query('completed')
    .optional()
    .isIn(['true', 'false'])
    .withMessage('completed must be true or false'),
  checkValidationResults,
];
