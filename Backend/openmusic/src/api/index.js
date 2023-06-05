/* eslint-disable quotes */

const AlbumHandler = require("./album/handler");
const SongHandler = require("./song/handler");
const UsersHandler = require("./users/handler");
const AuthenticationsHandler = require("./authentications/handler");
const AlbumsService = require("../services/postgres/albums");
const SongsService = require("../services/postgres/songs");
const UserService = require("../services/postgres/user");
const AuthService = require("../services/postgres/auth");
const routesAlbum = require("./album/routes");
const routesSong = require("./song/routes");
const routeUser = require("./users/routes");
const routeAuthentication = require("./authentications/routes");

module.exports = {
  name: "OpenMusic",
  version: "1.0.0",
  register: async (server, { validator }) => {
    const albumsService = new AlbumsService();
    const songsService = new SongsService();
    const usersService = new UserService();
    const authService = new AuthService();
    const albumsHandler = new AlbumHandler(albumsService, validator);
    const songsHandler = new SongHandler(songsService, validator);
    const usersHandler = new UsersHandler(usersService, validator);
    const authHandler = new AuthenticationsHandler(authService, validator);
    server.route(routesAlbum(albumsHandler));
    server.route(routesSong(songsHandler));
    server.route(routeUser(usersHandler));
    server.route(routeAuthentication(authHandler));
  },
};
