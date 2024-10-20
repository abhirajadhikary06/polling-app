// Import QuickBlox configuration and initialization
import QuickBlox from 'quickblox';
import { QB_CONFIG } from '../utils/quickblox-config';

// Initialize QuickBlox
QB.init(QB_CONFIG.appId, QB_CONFIG.authKey, QB_CONFIG.authSecret);

// Function to send a vote to the server
export const sendVote = async (vote) => {
    try {
        // Send the vote to the server
        const response = await fetch('http://127.0.0.1:5000/vote', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ vote: vote }),
        });

        // Check for successful response
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the response JSON
        const data = await response.json();
        return data.results; // Assuming your server responds with updated results
    } catch (error) {
        console.error('Error sending vote:', error);
    }
};

// Function to fetch the current poll results
export const fetchPollResults = async () => {
    try {
        const response = await fetch('http://127.0.0.1:5000/results', {
            method: 'GET',
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data.results; // Assuming your server responds with current results
    } catch (error) {
        console.error('Error fetching poll results:', error);
    }
};

// Function to handle user voting
export const handleVote = async (vote) => {
    const results = await sendVote(vote);
    return results; // Return the updated results
};

// Function to update poll results in the UI
export const updateResultsInUI = (results) => {
    const resultsDiv = document.getElementById('pollResults');
    resultsDiv.innerHTML = ''; // Clear previous results

    for (const [option, count] of Object.entries(results)) {
        const resultItem = document.createElement('div');
        resultItem.textContent = `${option}: ${count}`;
        resultsDiv.appendChild(resultItem);
    }
};
