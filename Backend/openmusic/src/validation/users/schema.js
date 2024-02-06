/* eslint-disable quotes */
const Joi = require("joi");

const userSchema = Joi.object({
    username: Joi.string().required().max(50).trim()
        .messages({
            "string.base": "name must be a string",
            "string.max": "name must be less than 50",
            "any.required": "name is required",
            "string.empty": "name is required",
        }),
    password: Joi.string().required().max(50).trim()
        .messages({
            "string.base": "name must be a string",
            "string.max": "name must be less than 50",
            "any.required": "name is required",
            "string.empty": "name is required",
        }),
    fullname: Joi.string().required().max(50).trim()
        .messages({
            "string.base": "name must be a string",
            "string.max": "name must be less than 50",
            "any.required": "name is required",
            "string.empty": "name is required",
        }),
});
module.exports = {
    userSchema,
};
