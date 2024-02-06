/* eslint-disable max-len */
/* eslint-disable quotes */
/* eslint-disable no-underscore-dangle */
const {Pool} = require("pg");
const {nanoid} = require("nanoid");
const {formatPlaylistSong} = require("../../utils/index");
const InvariantError = require("../../exceptions/InvariantError");
const NotFoundError = require("../../exceptions/NotFoundError");
const AuthorizationError = require("../../exceptions/AuthorizationError");

class PlaylistService {
    constructor() {
        this._pool = new Pool();
    }

    async verifyNoteOwner(id, owner) {
        const query = {
            text: "SELECT * FROM playlists WHERE id = $1",
            values: [id],
        };
        const result = await this._pool.query(query);
        if (!result.rows.length) {
            throw new NotFoundError("Catatan tidak ditemukan");
        }
        const note = result.rows[0];
        if (note.owner !== owner) {
            throw new AuthorizationError("Anda tidak berhak mengakses resource ini");
        }
    }

    // async verifyCollaborator(playlistId, userId) {
    //   const query = {
    //     text: "SELECT * FROM playlists inner join users on playlists.owner = users.id where playlists.id = $1 AND users.id = $2; ",
    //     values: [playlistId, userId],
    //   };
    //   const result = await this._pool.query(query);

    //   if (!result.rows.length) {
    //     throw new AuthorizationError("Playlists tidak ditemukan");
    //   }
    //   return result.rows[0];
    // }

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

    async getPlaylistId(id) {
        const query = {
            text: "SELECT * FROM playlists WHERE id = $1",
            values: [id],
        };
        const result = await this._pool.query(query);

        if (!result.rows.length) {
            throw new NotFoundError("Song tidak ditemukan");
        }
        return result.rows[0];
    }

    async addPlaylistSong(playlistId, userId, name) {
        await this.verifyNoteOwner(playlistId, userId);
        const playlistSongId = `playlist-song-${nanoid()}`;
        const query = {
            text: "INSERT INTO playlist_songs VALUES($1,$2,$3) RETURNING id",
            values: [playlistSongId, playlistId, name],
        };

        const result = await this._pool.query(query);
        if (!result.rows[0].id) {
            throw new InvariantError("Playlist-song gagal ditambahkan");
        }

        return result.rows[0].id;
    }

    async getPlaylistSongById(playlistId, userId) {
        await this.verifyNoteOwner(playlistId, userId);
        const query = {
            text: "SELECT p.id,p.name,u.username FROM playlists as p inner join users u on p.owner = u.id where p.id = $1",
            values: [playlistId],
        };

        const resultOwner = await this._pool.query(query);
        if (!resultOwner.rows[0].id) {
            throw new InvariantError("Playlist-song gagal ditemukan");
        }

        const query2 = {
            text: "select s.id , s.title, s.performer from songs s inner join playlist_songs ps on s.id = ps.song_id inner join playlists p on ps.playlist_id = p.id where p.id = $1",
            values: [playlistId],
        };

        const resulSong = await this._pool.query(query2);
        if (!resulSong.rows) {
            throw new InvariantError("Playlist-song gagal ditemukan");
        }

        return formatPlaylistSong(resultOwner.rows[0], resulSong.rows);
    }

    async deletePlaylistById(id) {
        const query = {
            text: "DELETE FROM playlists WHERE id=$1 RETURNING id",
            values: [id],
        };

        const result = await this._pool.query(query);

        if (!result.rows.length) {
            throw new NotFoundError("Song gagal dihapus. Id tidak ditemukan");
        }
    }
}

module.exports = PlaylistService;
