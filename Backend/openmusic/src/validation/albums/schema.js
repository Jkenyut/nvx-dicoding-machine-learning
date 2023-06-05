/* eslint-disable quotes */
const Joi = require("joi");

const albumSchema = Joi.object({
  name: Joi.string().required().max(50).trim()
    .messages({
      "string.base": "name must be a string",
      "string.max": "name must be less than 50",
      "any.required": "name is required",
      "string.empty": "name is required",
    }),
  year: Joi.number().integer().required().messages({
    "integer.base": "name must be a integer",
    "number.base": "name must be a integer",
    "any.required": "name is required",
    "integer.empty": "name is required",
  }),
});
module.exports = {
  albumSchema,
};
