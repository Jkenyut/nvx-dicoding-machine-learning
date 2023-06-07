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
      text: "INSERT INTO playlists VALUES($1, $2,$3) RETURNING id",
      values: [id, name, owner],
    };
    const result = await this._pool.query(query);
    if (!result.rows[0].id) {
      throw new InvariantError("Playlist gagal ditambahkan");
    }

    return result.rows[0].id;
  }

  async getPlaylist() {
    const query = {
      text: "SELECT playlist.id,users.username FROM playlists ",
      values: [],
    };
    const result = await this._pool.query(query);
    if (!result.rows.length) {
      throw new NotFoundError("Playlists tidak ditemukan");
    }
    return result.rows;
  }

  async getPlaylistId(id) {
    const query = {
      text: "SELECT * FROM Playlist WHERE id = $1",
      values: [id],
    };
    const result = await this._pool.query(query);

    if (!result.rows.length) {
      throw new NotFoundError("Song tidak ditemukan");
    }
    return result.rows[0];
  }
}

module.exports = PlaylistService;
