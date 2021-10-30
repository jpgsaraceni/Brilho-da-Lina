const writeButton = document.getElementById('write-btn');
const writeModal = document.getElementById('textarea-modal');
const closeWriteModalBtn = document.getElementById('close-textarea-modal');

writeButton.onclick = () => writeModal.style.visibility = 'visible';
closeWriteModalBtn.onclick = () => writeModal.style.visibility = 'hidden';