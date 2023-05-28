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

  async addUser({ username, password, fullname }) {
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
