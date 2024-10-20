// Import QuickBlox configuration
import { QB_CONFIG } from '../utils/quickblox-config';
import { sendVote, fetchPollResults, updateResultsInUI } from '../services/polling';

// Initialize QuickBlox
const QB = require('quickblox');

QB.init(QB_CONFIG.appId, QB_CONFIG.authKey, QB_CONFIG.authSecret);

// Join the chat room
function joinChat(roomId) {
    const params = {
        id: roomId,
    };

    QB.chat.join(roomId, params, (err, result) => {
        if (err) {
            console.error('Error joining chat:', err);
            return;
        }
        console.log('Successfully joined chat room:', result);
    });
}

// Send vote to the back-end and update results
async function handleVote(vote) {
    const results = await sendVote(vote);
    if (results) {
        updateResultsInUI(results);
    }
}

// Function to initialize the application
async function initChat(roomId) {
    joinChat(roomId);
    const initialResults = await fetchPollResults();
    updateResultsInUI(initialResults);
}

// Listening for user input to send a vote
document.getElementById('voteButton').addEventListener('click', async () => {
    const userVote = document.getElementById('voteInput').value.trim();
    if (userVote) {
        await handleVote(userVote);
        document.getElementById('voteInput').value = ''; // Clear the input field
    } else {
        alert('Please enter a valid vote.');
    }
});

// Fetch initial poll results and initialize chat when the page loads
window.onload = () => {
    const roomId = 'your_room_id'; // Replace with the actual room ID
    initChat(roomId);
};
