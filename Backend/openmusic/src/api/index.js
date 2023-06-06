/* eslint-disable quotes */

const albumsValidator = require("../validation/albums");
const songsValidator = require("../validation/songs");
const usersValidator = require("../validation/users");
const authValidator = require("../validation/authentications");

const AlbumHandler = require("./albums/handler");
const SongHandler = require("./song/handler");
const UsersHandler = require("./users/handler");
const AuthenticationsHandler = require("./authentications/handler");

const AlbumsService = require("../services/postgres/albums");
const SongsService = require("../services/postgres/songs");
const UserService = require("../services/postgres/user");
const AuthService = require("../services/postgres/auth");
const tokenService = require("../tokenize/TokenManager");

const routesAlbum = require("./albums/routes");
const routesSong = require("./song/routes");
const routeUser = require("./users/routes");
const routeAuthentication = require("./authentications/routes");

module.exports = {
  name: "OpenMusic",
  version: "1.0.0",
  register: async (server) => {
    const albumsService = new AlbumsService();
    const songsService = new SongsService();
    const usersService = new UserService();
    const authService = new AuthService();

    const albumsHandler = new AlbumHandler(albumsService, albumsValidator);
    const songsHandler = new SongHandler(songsService, songsValidator);
    const usersHandler = new UsersHandler(usersService, usersValidator);
    const authHandler = new AuthenticationsHandler(
      authService,
      usersService,
      tokenService,
      authValidator,
    );

    server.route(routesAlbum(albumsHandler));
    server.route(routesSong(songsHandler));
    server.route(routeUser(usersHandler));
    server.route(routeAuthentication(authHandler));
  },
};
