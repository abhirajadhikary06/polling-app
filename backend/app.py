from flask import Flask, request, jsonify
import json

app = Flask(__name__)

# In-memory storage for poll votes (you might want to use a database for production)
poll_votes = {
    'option1': 0,
    'option2': 0,
    'option3': 0,
}

# Route to handle voting
@app.route('/vote', methods=['POST'])
def vote():
    data = request.get_json()
    vote = data.get('vote')
    
    # Increment the vote count based on the option selected
    if vote in poll_votes:
        poll_votes[vote] += 1
        return jsonify({'results': poll_votes}), 200
    else:
        return jsonify({'error': 'Invalid vote option'}), 400

# Route to fetch poll results
@app.route('/results', methods=['GET'])  # Updated to match your fetchPollResults function
def poll_results():
    return jsonify({'results': poll_votes}), 200

if __name__ == '__main__':
    app.run(debug=True)
