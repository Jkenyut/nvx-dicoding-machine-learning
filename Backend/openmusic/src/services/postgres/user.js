/* eslint-disable no-underscore-dangle */
/* eslint-disable quotes */
const { Pool } = require("pg");
const { nanoid } = require("nanoid");
// eslint-disable-next-line import/no-extraneous-dependencies
const bcrypt = require("bcrypt");
// const { mapDBToModel } = require("../../utils");
const InvariantError = require("../../exceptions/InvariantError");
const NotFoundError = require("../../exceptions/NotFoundError");

class UserService {
  constructor() {
    this._pool = new Pool();
  }

  async getUsersByUsername(username) {
    const query = {
      text: "SELECT id, username, fullname FROM users WHERE username LIKE $1",
      values: [`%${username}%`],
    };
    const result = await this._pool.query(query);
    if (result.lenght < 0) {
      throw new NotFoundError("User tidak ditemukan");
    }
    return result.rows[0].id;
  }

  async verifyNewUsername(username) {
    const query = {
      text: "SELECT username FROM users WHERE username = $1",
      values: [username],
    };
    const result = await this._pool.query(query);

    if (result.rows.length > 0) {
      throw new InvariantError("Gagal menambahkan user. Username sudah digunakan.");
    }
  }

  async addUser({ username, password, fullname }) {
    await this.verifyNewUsername(username);
    const id = `user-${nanoid(16)}`;
    const hassPassword = await bcrypt.hash(password, 10);
    const query = {
      text: "INSERT INTO users VALUES($1, $2, $3,$4) RETURNING id",
      values: [id, username, hassPassword, fullname],
    };
    const result = await this._pool.query(query);
    if (!result.rows[0].id) {
      throw new InvariantError("User gagal ditambahkan");
    }

    return result.rows[0].id;
  }
}
module.exports = UserService;
