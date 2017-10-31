var playlist = { radiohead: "Creep" };

function updatePlaylist(playlist, artistName, songTitle) {
  playlist.assign({}, playlist, { artistName: songTitle })
}
