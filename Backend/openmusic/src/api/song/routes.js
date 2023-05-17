/* eslint-disable quotes */
const routesSong = (handler) => [
  {
    method: "POST",
    path: "/songs",
    handler: handler.postSongHandler, // save
  },
  {
    method: "GET",
    path: "/songs",
    handler: handler.getSongHandler, // get
  },
  {
    method: "GET",
    path: "/songs/{id}",
    handler: handler.getSongByIdHandler, // getbyid
  },
  {
    method: "PUT",
    path: "/songs/{id}",
    handler: handler.putSongByIdHandler, // edit by id
  },
  // {
  //   method: "DELETE",
  //   path: "/songs/{id}",
  //   handler: handler.deleteAlbumByIdHandler, // delete by id
  // },
];

module.exports = routesSong;
