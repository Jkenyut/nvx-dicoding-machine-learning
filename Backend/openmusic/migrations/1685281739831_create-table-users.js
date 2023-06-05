/* eslint-disable quotes */
/* eslint-disable camelcase */
exports.up = (pgm) => {
  pgm.createTable("users", {
    id: {
      type: "VARCHAR(255)",
      primaryKey: true,
      notNull: true,
      unique: true,
    },
    username: {
      type: "VARCHAR(255)",
      notNull: false,
      unique: true,
    },
    password: {
      type: "VARCHAR(255)",
      notNull: false,
    },
    fullname: {
      type: "VARCHAR(255)",
      notNull: false,
    },
  });
};
exports.down = (pgm) => pgm.dropTable("users");
