/* eslint-disable quotes */
/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("songs", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
      notNull: true,
      unique: true,
    },
    title: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    year: {
      type: "INTEGER",
      notNull: true,
    },
    genre: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    performer: {
      type: "VARCHAR(50)",
      notNull: true,
    },
    duration: {
      type: "INTEGER",
      notNull: false,
    },
    albumid: {
      type: "VARCHAR(50)",
      notNull: false,
      references: '"album"',
      onDelete: "cascade",
    },
  });
  pgm.createIndex("songs", "albumid");
};

exports.down = (pgm) => {
  pgm.dropTable("songs");
};
