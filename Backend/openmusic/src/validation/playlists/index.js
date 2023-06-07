/* eslint-disable quotes */
const { playlistSchema, playlistSongSchema } = require("./schema");
const InvariantError = require("../../exceptions/InvariantError");

const playlistValidator = {
  validatePlaylistPayload: (payload) => {
    const validationResult = playlistSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
    return validationResult.value;
  },
  validateplaylistSongPayload: (payload) => {
    const validationResult = playlistSongSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
    return validationResult.value;
  },
};
module.exports = playlistValidator;
