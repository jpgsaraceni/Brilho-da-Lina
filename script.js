const writeButton = document.getElementById('write-btn');
const writeModal = document.getElementById('textarea-modal');
const closeWriteModalBtn = document.getElementById('close-textarea-modal');

const gamesButton = document.getElementById('games-btn');
const gamesModal = document.getElementById('games-modal');
const closeGamesModalBtn = document.getElementById('close-games-modal');

writeButton.onclick = () => {
  writeModal.style.visibility = 'visible'
  gamesModal.style.visibility = 'hidden';
};
closeWriteModalBtn.onclick = () => writeModal.style.visibility = 'hidden';

gamesButton.onclick = () => {
  gamesModal.style.visibility = 'visible'
  writeModal.style.visibility = 'hidden';
};
closeGamesModalBtn.onclick = () => gamesModal.style.visibility = 'hidden';