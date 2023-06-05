/* eslint-disable quotes */
const routesAlbum = (handler) => [
  {
    method: "POST",
    path: "/albums",
    handler: handler.postAlbumHandler,
    options: {
      auth: "notesapp_jwt",
    }, // save
  },
  {
    method: "GET",
    path: "/albums/{id}",
    handler: handler.getAlbumByIdHandler, // getbyid
    options: {
      auth: "notesapp_jwt",
    },
  },
  {
    method: "PUT",
    path: "/albums/{id}",
    handler: handler.putAlbumByIdHandler, // edit by id
    options: {
      auth: "notesapp_jwt",
    },
  },
  {
    method: "DELETE",
    path: "/albums/{id}",
    handler: handler.deleteAlbumByIdHandler, // delete by id
    options: {
      auth: "notesapp_jwt",
    },
  },
];

module.exports = routesAlbum;
