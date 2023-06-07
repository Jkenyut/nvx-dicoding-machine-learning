/* eslint-disable quotes */
// /* eslint-disable camelcase */
exports.up = (pgm) => {
  pgm.createTable("playlist_song_activaties", {
    id: {
      type: "VARCHAR(255)",
      primaryKey: true,
      notNull: true,
      unique: true,
    },
    playlist_id: {
      type: "VARCHAR(255)",
      notNull: false,
      references: '"playlists"',
      onDelete: "cascade",
      onUpdate: "cascade",
    },
    song_id: {
      type: "VARCHAR(255)",
      notNull: false,
    },
    user_id: {
      type: "VARCHAR(255)",
      notNull: false,
    },
    action: {
      type: "VARCHAR(255)",
    },
    time: {
      type: "VARCHAR(255)",
    },
  });
};
exports.down = (pgm) => pgm.dropTable("playlist_song_activaties");
