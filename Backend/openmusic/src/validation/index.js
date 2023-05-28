/* eslint-disable quotes */
const { albumSchema, songSchema, userSchema } = require("./schema");
const InvariantError = require("../exceptions/InvariantError");

const MusicValidator = {
  validateAlbumPayload: (payload) => {
    const validationResult = albumSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
    return validationResult.value;
  },
  validateSongPayload: (payload) => {
    const validationResult = songSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
    return validationResult.value;
  },
  validateUserPayload: (payload) => {
    const validationResult = userSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
    return validationResult.value;
  },
};
module.exports = MusicValidator;
