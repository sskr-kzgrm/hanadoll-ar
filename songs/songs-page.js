const songList = document.querySelector("#song-list");
const pageMessage = document.querySelector("#page-message");
const selectionLabel = document.querySelector("#selection-label");
const rerollButton = document.querySelector("#reroll-button");

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function showMessage(message) {
  pageMessage.textContent = message;
  pageMessage.hidden = false;
}

function createSongCard(song, index) {
  const item = document.createElement("li");
  item.className = "song-card";

  const heading = document.createElement("h2");
  heading.textContent = `${index + 1}. ${song.title}`;

  const artist = document.createElement("p");
  artist.className = "song-artist";
  artist.textContent = song.artist;

  const video = document.createElement("iframe");
  video.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(song.youtubeId)}`;
  video.title = `${song.title} - ${song.artist}`;
  video.loading = "lazy";
  video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
  video.referrerPolicy = "strict-origin-when-cross-origin";
  video.allowFullscreen = true;

  item.append(heading, artist, video);
  return item;
}

function getSongById(id, songsById) {
  const song = songsById.get(id);
  if (!song || !song.title || !song.artist || !/^[\w-]{11}$/.test(song.youtubeId)) {
    return null;
  }
  return song;
}

function renderSongs(selectedSongs) {
  if (selectedSongs.length === 0) {
    showMessage("紹介できる楽曲がありません。songs-data.jsに楽曲を登録してください。");
    return;
  }

  selectedSongs.forEach((song, index) => {
    songList.append(createSongCard(song, index));
  });
}

const songsById = new Map(songs.map((song) => [song.youtubeId, song]));

if (document.body.dataset.page === "recommend") {
  const selection = shuffle(fanSelections)[0];
  if (!selection || !Array.isArray(selection.songIds)) {
    showMessage("ファンの選曲がありません。songs-data.jsにファンの5選を登録してください。");
  } else {
    const selectedIds = [...new Set(selection.songIds)];
    const selectedSongs = selectedIds
      .map((id) => getSongById(id, songsById))
      .filter(Boolean);

    selectionLabel.textContent = selection.fan ? `${selection.fan}さんの5選` : "ファンの5選";
    if (selectedSongs.length < selectedIds.length) {
      showMessage("楽曲リストにないID、または情報が不足している選曲は表示できませんでした。");
    }
    renderSongs(selectedSongs);
  }
} else {
  const validSongs = songs.filter((song) => getSongById(song.youtubeId, songsById));
  function selectRandomSongs() {
    songList.replaceChildren();
    pageMessage.hidden = true;
    pageMessage.textContent = "";
    renderSongs(shuffle(validSongs).slice(0, 5));
  }

  if (rerollButton) {
    rerollButton.disabled = validSongs.length === 0;
    rerollButton.addEventListener("click", selectRandomSongs);
  }

  selectRandomSongs();
}
