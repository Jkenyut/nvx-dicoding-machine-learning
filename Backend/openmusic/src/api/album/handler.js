/* eslint-disable import/no-unresolved */
/* eslint-disable quotes */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
const autoBind = require("auto-bind");

class AlbumsHandler {
  constructor(service, validator) {
    this._service = service;
    this._validator = validator;

    autoBind(this); // mem-bind nilai this untuk seluruh method sekaligus
  }

  async postAlbumHandler(request, h) {
    const { name, year } = this._validator.validateAlbumPayload(request.payload);

    const idAlbum = await this._service.addAlbum({ name, year });

    const response = h.response({
      status: "success",
      data: {
        albumId: idAlbum,
      },
    });
    response.code(201);
    return response;
  }

  async getAlbumByIdHandler(request, h) {
    const { id } = request.params;
    const albumId = await this._service.getAlbumById(id);
    const response = h.response({
      status: "success",
      data: {
        album: albumId,
      },
    });
    response.code(200);
    return response;
  }

  async putAlbumByIdHandler(request, h) {
    const { id } = request.params;
    const { name, year } = this._validator.validateAlbumPayload(request.payload);
    await this._service.editAlbumById(id, { name, year });
    const response = h.response({
      status: "success",
      message: "Album telah diubah",
    });
    response.code(200);
    return response;
  }

  async deleteAlbumByIdHandler(request, h) {
    const { id } = request.params;
    await this._service.deleteAlbumById(id);
    const response = h.response({
      status: "success",
      message: "Album telah diubah",
    });
    response.code(200);
    return response;
  }
}

module.exports = AlbumsHandler;
