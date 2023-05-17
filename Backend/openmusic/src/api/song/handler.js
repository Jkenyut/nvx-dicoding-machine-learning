/* eslint-disable operator-linebreak */
/* eslint-disable object-curly-newline */
/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
const autoBind = require("auto-bind");

class SongHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    autoBind(this); // mem-bind nilai this untuk seluruh method sekaligus
  }

  async postSongHandler(request, h) {
    const { title, year, genre, performer, duration, albumId } =
      this._validator.validateSongPayload(request.payload);

    const idSong = await this._service.addSong({
      title,
      year,
      genre,
      performer,
      duration,
      albumId,
    });

    const response = h.response({
      status: "success",
      data: {
        songId: idSong,
      },
    });
    response.code(201);
    return response;
  }

  async getSongHandler(request, h) {
    const song = await this._service.getSong();
    const response = h.response({
      status: "success",
      data: {
        songs: song,
      },
    });
    response.code(200);
    return response;
  }

  async getSongByIdHandler(request, h) {
    const { id } = request.params;
    const songId = await this._service.getSongById(id);
    const response = h.response({
      status: "success",
      data: {
        song: songId,
      },
    });
    response.code(200);
    return response;
  }

  async putSongByIdHandler(request, h) {
    const { id } = request.params;
    const { title, year, genre, performer, duration, albumId } =
      this._validator.validateSongPayload(request.payload);
    await this._service.editSongById(id, { title, year, genre, performer, duration, albumId });
    const response = h.response({
      status: "success",
      message: "Song telah diubah",
    });
    response.code(200);
    return response;
  }

  async deleteSongByIdHandler(request, h) {
    const { id } = request.params;
    await this._service.deleteAlbumById(id);
    const response = h.response({
      status: "success",
      message: "Song telah diubah",
    });
    response.code(200);
    return response;
  }
}

module.exports = SongHandler;
