/* eslint-disable quotes */
const { userSchema } = require("./schema");
const InvariantError = require("../../exceptions/InvariantError");

const usersValidator = {
  validateUsersPayload: (payload) => {
    const validationResult = userSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = usersValidator;
