/* eslint-disable quotes */
// /* eslint-disable camelcase */
exports.up = (pgm) => {
  pgm.createTable("collaborations", {
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
    user_id: {
      type: "VARCHAR(50)",
      notNull: false,
      references: '"users"',
      onDelete: "cascade",
      onUpdate: "cascade",
    },
  });
};
exports.down = (pgm) => pgm.dropTable("collaborations");
