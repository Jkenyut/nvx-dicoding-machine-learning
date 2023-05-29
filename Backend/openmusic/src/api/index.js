/* eslint-disable quotes */

const AlbumHandler = require("./album/handler");
const SongHandler = require("./song/handler");
const UsersHandler = require("./users/handler");
const AlbumsService = require("../services/postgres/albums");
const SongsService = require("../services/postgres/songs");
const usersService = require("../services/postgres/user");
const routesAlbum = require("./album/routes");
const routesSong = require("./song/routes");
const routeUser = require("./users/routes");

module.exports = {
  name: "OpenMusic",
  version: "1.0.0",
  register: async (server, { validator }) => {
    const albumsService = new AlbumsService();
    const songsService = new SongsService();
    const albumsHandler = new AlbumHandler(albumsService, validator);
    const songsHandler = new SongHandler(songsService, validator);
    const usersHandler = new UsersHandler(usersService, validator);
    server.route(routesAlbum(albumsHandler));
    server.route(routesSong(songsHandler));
    server.route(routeUser(usersHandler));
  },
};
