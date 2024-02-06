/* eslint-disable newline-per-chained-call */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
const Joi = require("joi");

const songSchema = Joi.object({
    title: Joi.string().required().max(50).trim().messages({
        "string.base": "name must be a string",
        "string.max": "name must be less than 50",
        "any.required": "name is required",
        "string.empty": "name is required",
    }),
    year: Joi.number().integer().required().messages({
        "integer.base": "name must be a integer",
        "any.required": "name is required",
        "integer.empty": "name is required",
    }),
    genre: Joi.string().required().max(50).trim().messages({
        "string.base": "name must be a string",
        "string.max": "name must be less than 50",
        "any.required": "name is required",
        "string.empty": "name is required",
    }),
    performer: Joi.string().required().max(50).trim().messages({
        "string.base": "name must be a string",
        "string.max": "name must be less than 50",
        "any.required": "name is required",
        "string.empty": "name is required",
    }),
    duration: Joi.number().integer().optional().messages({
        "integer.base": "name must be a string",
    }),
    albumId: Joi.string().optional().max(50).trim().messages({
        "string.base": "name must be a integer",
        "string.max": "name must be less than 50",
    }),
});

module.exports = {songSchema};
