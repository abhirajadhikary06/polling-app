# QuickBlox Real-time Anonymous Polling System

## Overview
This project is a simple real-time polling system that allows users to participate in anonymous polls via a chat interface using QuickBlox for real-time communication.

## Features
- **Anonymous Voting**: Users can vote without revealing their identity.
- **Real-time Results**: Poll results are updated dynamically in the chat as votes come in.
- **User-Friendly Interface**: Simple and intuitive UI for easy interaction.

## Technologies Used
- **Front-End**: HTML, CSS, JavaScript
- **Back-End**: Python, Flask
- **Real-Time Communication**: QuickBlox JavaScript SDK

## Setup Instructions

### Prerequisites
- Ensure you have Python installed on your machine.
- You will need access to QuickBlox and your credentials (App ID, Auth Key, Auth Secret).

### Step 1: Clone the Repository
```bash
git clone <repository-url>
cd <repository-name>
```

### Step 2: Install Python Dependencies
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install Flask and Flask-CORS:
   ```bash
   pip install -r requirements.txt
   ```

### Step 3: Set Up QuickBlox Credentials
- Open `utils/quickblox-config.js` and replace `YOUR_APP_ID`, `YOUR_AUTH_KEY`, and `YOUR_AUTH_SECRET` with your actual QuickBlox credentials.
- You can also set these credentials in the `.env` file if you choose to use environment variables.

### Step 4: Run the Python Server
1. From the `backend` directory, run:
   ```bash
   python app.py
   ```
   The Flask server should now be running at `http://127.0.0.1:5000`.

### Step 5: Open the Front-End
1. Navigate to the `public` directory and serve the static files:
   ```bash
   cd ../public
   python -m http.server
   ```
   The front-end should be accessible at `http://127.0.0.1:8000`.

### Usage
- Open multiple tabs or browsers to simulate different users.
- Users can type their votes (e.g., "Option A", "Option B", or "Option C") and click the "Vote" button.
- The results will be displayed and updated in real-time in the chat.

## Troubleshooting
- If you encounter CORS issues, make sure to enable CORS in your Flask app using the `flask-cors` package.
- Check the browser console for any JavaScript errors or network issues.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments
- [QuickBlox](https://quickblox.com/) for providing a powerful communication platform.
- Flask team for their excellent web framework.

### **requirements.txt**
```
Flask==2.2.2
Flask-CORS==3.0.10
```
