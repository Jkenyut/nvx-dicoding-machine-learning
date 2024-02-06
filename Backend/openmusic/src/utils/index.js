/* eslint-disable camelcase */

// format response

function formatAlbumWithSongs(resultAlbum, resultSong) {
    return resultAlbum.rows.map(({id, name, year}) => ({
        id,
        name,
        year,
        songs: resultSong.rows,
    }))[0];
}

// format
function formatPlaylistSong(resultPlaylist, resultPlaylistSong) {
    const OK = {
        id: resultPlaylist.id,
        name: resultPlaylist.name,
        username: resultPlaylist.username,
        songs: resultPlaylistSong.map(({id, title, performer}) => ({
            id,
            title,
            performer,
        })),
    };
    return OK;
}

module.exports = {formatAlbumWithSongs, formatPlaylistSong};
