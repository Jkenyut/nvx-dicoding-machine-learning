/* eslint-disable quotes */
const { playlistSchema } = require("./schema");
const InvariantError = require("../../exceptions/InvariantError");

const playlistValidator = {
  validateSongPayload: (payload) => {
    const validationResult = playlistSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
    return validationResult.value;
  },
};
module.exports = playlistValidator;
