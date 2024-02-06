/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable quotes */
const Joi = require("joi");

const UserPayloadSchema = Joi.object({
    username: Joi.string().required(),
    password: Joi.string().required(),
    fullname: Joi.string().required(),
});
module.exports = {UserPayloadSchema};
