/* eslint-disable quotes */
const routesPlaylist = (handler) => [
  {
    method: "POST",
    path: "/playlists",
    handler: handler.postPlaylistHandler,
    options: {
      auth: "notesapp_jwt",
    },
    // save
  },
  {
    method: "GET",
    path: "/playlists",
    handler: handler.getPlaylistHandler,
    options: {
      auth: "notesapp_jwt",
    }, // getbyid
  },
  {
    method: "POST",
    path: "/playlists/{id}/songs",
    handler: handler.postPlaylistSongByIdHandler,
    options: {
      auth: "notesapp_jwt",
    }, // getbyid
  },
  {
    method: "GET",
    path: "/playlists/{id}",
    handler: handler.getPlaylistByIdHandler,
    options: {
      auth: "notesapp_jwt",
    }, // getbyid
  },
  {
    method: "PUT",
    path: "/playlists/{id}",
    handler: handler.putPlaylistByIdHandler,
    options: {
      auth: "notesapp_jwt",
    }, // edit by id
  },
  {
    method: "DELETE",
    path: "/playlists/{id}",
    handler: handler.deletePlaylistByIdHandler,
    options: {
      auth: "notesapp_jwt",
    }, // delete by id
  },
];

module.exports = routesPlaylist;
