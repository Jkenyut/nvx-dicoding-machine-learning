/* eslint-disable quotes */
/* eslint-disable no-underscore-dangle */
const { Pool } = require("pg");
const { nanoid } = require("nanoid");
const InvariantError = require("../../exceptions/InvariantError");
const NotFoundError = require("../../exceptions/NotFoundError");

class PlaylistService {
  constructor() {
    this._pool = new Pool();
  }

  async addPlaylist(name, owner) {
    const id = `playlist-${nanoid()}`;
    const query = {
      text: "INSERT INTO playlists VALUES($1,$2,$3) RETURNING id",
      values: [id, name, owner],
    };
    const result = await this._pool.query(query);
    if (!result.rows[0].id) {
      throw new InvariantError("Playlist gagal ditambahkan");
    }

    return result.rows[0].id;
  }

  async getPlaylist(id) {
    const query = {
      text: "SELECT p.id,p.name,u.username FROM playlists  as p inner join users as u on p.owner = u.id where u.id=$1",
      values: [id],
    };
    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new NotFoundError("Playlists tidak ditemukan");
    }
    return result.rows;
  }

  async getPlaylistById(playlistId, userId) {
    const query = {
      text: "SELECT * FROM playlists inner join users on playlists.owner = users.id where playlists.id = $1 AND users.id = $2; ",
      values: [playlistId, userId],
    };
    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError("Playlists tidak ditemukan");
    }
    return result.rows[0];
  }

  async addPlaylistSong(id, name) {
    const playlistSongId = `playlist-song-${nanoid()}`;
    const query = {
      text: "INSERT INTO playlist_songs VALUES($1,$2,$3) RETURNING id",
      values: [playlistSongId, id, name],
    };
    const result = await this._pool.query(query);
    if (!result.rows[0].id) {
      throw new InvariantError("Playlist-song gagal ditambahkan");
    }

    return result.rows[0].id;
  }
}

module.exports = PlaylistService;
