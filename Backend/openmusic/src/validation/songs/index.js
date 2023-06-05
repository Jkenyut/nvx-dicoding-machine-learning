/* eslint-disable quotes */
const { songSchema } = require("./schema");
const InvariantError = require("../../exceptions/InvariantError");

const songsValidator = {
  validateSongPayload: (payload) => {
    const validationResult = songSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
    return validationResult.value;
  },
};
module.exports = songsValidator;
