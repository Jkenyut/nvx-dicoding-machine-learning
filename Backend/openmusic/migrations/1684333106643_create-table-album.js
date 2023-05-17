/* eslint-disable quotes */
/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("album", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
      notNull: true,
      unique: true,
    },
    name: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    year: {
      type: "INTEGER",
      notNull: true,
    },
  });
};

exports.down = (pgm) => {
  pgm.dropTable("album");
};
