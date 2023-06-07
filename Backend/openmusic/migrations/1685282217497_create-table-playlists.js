/* eslint-disable quotes */
// /* eslint-disable camelcase */
exports.up = (pgm) => {
  pgm.createTable("playlists", {
    id: {
      type: "VARCHAR(255)",
      primaryKey: true,
      notNull: true,
      unique: true,
    },
    name: {
      type: "VARCHAR(255)",
      notNull: false,
    },
    owner: {
      type: "VARCHAR(255)",
      notNull: false,
      references: '"users"',
      onDelete: "cascade",
      onUpdate: "cascade",
    },
  });
};
exports.down = (pgm) => pgm.dropTable("playlists");
