/* eslint-disable quotes */
/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = (pgm) => {
  pgm.createTable("playlist_songs", {
    id: {
      type: "VARCHAR(50)",
      primaryKey: true,
      notNull: true,
      unique: true,
    },
    playlist_id: {
      type: "VARCHAR(50)",
      notNull: false,
      references: '"playlists"',
      onDelete: "cascade",
      onUpdate: "cascade",
    },
    song_id: {
      type: "VARCHAR(50)",
      notNull: false,
      references: '"songs"',
      onDelete: "cascade",
      onUpdate: "cascade",
    },
  });
};

exports.down = (pgm) => pgm.dropTable("playlist_songs");
