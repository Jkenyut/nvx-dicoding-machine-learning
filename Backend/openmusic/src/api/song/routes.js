/* eslint-disable quotes */
const routesSong = (handler) => [
  {
    method: "POST",
    path: "/songs",
    handler: handler.postSongHandler, // save
    options: {
      auth: "notesapp_jwt",
    },
  },
  {
    method: "GET",
    path: "/songs",
    handler: handler.getSongHandler, // get
    options: {
      auth: "notesapp_jwt",
    },
  },
  {
    method: "GET",
    path: "/songs/{id}",
    handler: handler.getSongByIdHandler, // getbyid
    options: {
      auth: "notesapp_jwt",
    },
  },
  {
    method: "PUT",
    path: "/songs/{id}",
    handler: handler.putSongByIdHandler, // edit by id
    options: {
      auth: "notesapp_jwt",
    },
  },
  {
    method: "DELETE",
    path: "/songs/{id}",
    handler: handler.deleteSongByIdHandler, // delete by id
    options: {
      auth: "notesapp_jwt",
    },
  },
];

module.exports = routesSong;
