
const audioElement = document.getElementById('expertAudio');
const durationElement = document.getElementById('audioDuration');

// Play audio when clicking on expert avatar
function playAudio() {
    audioElement.play();
}

// Display audio duration once it's loaded
audioElement.onloadedmetadata = function() {
    const minutes = Math.floor(audioElement.duration / 60);
    const seconds = Math.floor(audioElement.duration % 60);
    durationElement.textContent = `Audio Duration: ${minutes} min ${seconds} sec`;
};
