/* eslint-disable quotes */
// /* eslint-disable camelcase */
exports.up = (pgm) => {
  pgm.createTable("playlist_song_activaties", {
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
    action: {
      type: "VARCHAR(50)",
    },
    time: {
      type: "VARCHAR(50)",
    },
  });
};
exports.down = (pgm) => pgm.dropTable("playlist_song_activaties");
