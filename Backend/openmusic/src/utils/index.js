/* eslint-disable camelcase */
function formatAlbumWithSongs(resultAlbum, resultSong) {
  return resultAlbum.rows.map(({ id, name, year }) => ({
    id,
    name,
    year,
    songs: resultSong.rows,
  }))[0];
}

module.exports = { formatAlbumWithSongs };
