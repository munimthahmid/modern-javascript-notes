const totalPlaylistTime = 259; // Total time of the playlist in minutes
let watchedTime = 0; // Variable to keep track of watched time

function updateProgress() {
    // Get the input value
    const inputTime = document.getElementById('watched-time').value;

    // Convert input value to number and add to watchedTime
    watchedTime += parseInt(inputTime);
    watchedTime=watchedTime/60;

    // Calculate the progress as a percentage
    const progressPercentage = (watchedTime / totalPlaylistTime) * 100;

    // Update the progress display
    document.getElementById('progress-display').innerText = `Progress: ${progressPercentage.toFixed(2)}%`;

    // Clear the input field
    document.getElementById('watched-time').value = '';
}
