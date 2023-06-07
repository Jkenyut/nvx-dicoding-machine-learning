/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
const autoBind = require("auto-bind");

class PlaylistHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    autoBind(this); // mem-bind nilai this untuk seluruh method sekaligus
  }

  async postPlaylistHandler(request, h) {
    console.log("hallo");
    const { name } = this._validator.validatePlaylistPayload(request.payload);
    const { id: credentialId } = request.auth.credentials;
    console.log(credentialId);
    const playlistId = await this._service.addPlaylist(name, credentialId);
    const response = h.response({
      status: "success",
      data: {
        playlistId,
      },
    });
    response.code(201);
    return response;
  }

  async getPlaylistHandler(request, h) {
    const { id: credentialId } = request.auth.credentials;
    console.log(credentialId);
    const playlists = await this._service.getPlaylist(credentialId);
    const response = h.response({
      status: "success",
      data: {
        playlists,
      },
    });
    response.code(200);
    return response;
  }

  async postPlaylistSongByIdHandler(request, h) {
    const { id } = request.params;
    const { name } = this._validator.validateplaylistSongPayload(request.payload);
    const playlistSongId = await this._service.addPlaylistSong(id, name);
    const response = h.response({
      status: "success",
      data: {
        playlistSongId,
      },
    });
    response.code(200);
    return response;
  }

  async getPlaylistByIdHandler(request, h) {
    const { id } = request.params;
    const PlaylistId = await this._service.getPlaylistById(id);
    const response = h.response({
      status: "success",
      data: {
        Playlist: PlaylistId,
      },
    });
    response.code(200);
    return response;
  }

  async putPlaylistByIdHandler(request, h) {
    const { id } = request.params;
    const { name, year } = this._validator.validatePlaylistPayload(request.payload);
    await this._service.editPlaylistById(id, { name, year });
    const response = h.response({
      status: "success",
      message: "Playlist telah diubah",
    });
    response.code(200);
    return response;
  }

  async deletePlaylistByIdHandler(request, h) {
    const { id } = request.params;
    await this._service.deletePlaylistById(id);
    const response = h.response({
      status: "success",
      message: "Playlist telah diubah",
    });
    response.code(200);
    return response;
  }
}

module.exports = PlaylistHandler;
