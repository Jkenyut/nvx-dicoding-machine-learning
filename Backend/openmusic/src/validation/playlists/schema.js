/* eslint-disable newline-per-chained-call */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
const Joi = require("joi");

const playlistSchema = Joi.object({
    name: Joi.string().required().max(50).trim().messages({
        "string.base": "name must be a string",
        "string.max": "name must be less than 50",
        "any.required": "name is required",
        "string.empty": "name is required",
    }),
});

const playlistSongSchema = Joi.object({
    songId: Joi.string().required().max(50).trim().messages({
        "string.base": "name must be a string",
        "string.max": "name must be less than 50",
        "any.required": "name is required",
        "string.empty": "name is required",
    }),
});

module.exports = {playlistSchema, playlistSongSchema};
