/* eslint-disable quotes */
const { albumSchema } = require("./schema");
const InvariantError = require("../../exceptions/InvariantError");

const albumsValidator = {
  validateAlbumsPayload: (payload) => {
    const validationResult = albumSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = albumsValidator;
