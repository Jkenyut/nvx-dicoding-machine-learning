/* eslint-disable quotes */
const {userSchema} = require("./schema");
const InvariantError = require("../../exceptions/InvariantError");

const usersValidator = {
    validateUserPayload: (payload) => {
        const validationResult = userSchema.validate(payload);
        if (validationResult.error) {
            throw new InvariantError(validationResult.error.message);
        }
        return validationResult.value;
    },
};

module.exports = usersValidator;
