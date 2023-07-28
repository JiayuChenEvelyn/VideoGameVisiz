from flask import Flask, request, jsonify
from flask_cors import CORS
from GR_CB.recommendation import get_recommendations
from Prediction_Score.prediction import predict_score
from GR_PS.rec import rec

import pandas as pd

app = Flask(__name__)
CORS(app)

# Cross-domain needs
@app.route('/')
def hello_world():
    return 'Hello, World!'


@app.route('/recommend', methods=['POST'])
def recommend():
    data = request.get_json()
    gameName = data.get('gameName')
    recommendations = get_recommendations(gameName)
    print(recommendations)

    if gameName is None:
        return jsonify({'error': 'gameName parameter missing'}), 400
    return jsonify({"recommended_games": recommendations.tolist()})


@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    # Add missing features with default values to data
    all_features = ['developers', 'publishers', 'supported_languages', 'price', 'all_reviews', 'positice_reviews',
                    'released_year', 'Action', 'First-Person', 'Third Person', 'Adventure', 'Strategy', 'RPG',
                    'Simulation', 'Horror', 'Survival', 'Puzzle', 'Indie', 'Retro', 'Pixel Graphics', 'Rouguelike',
                    '2D Platform', '3D Platform', 'Multiplayer', 'Casual', 'Visual Novel', 'Otome', 'Arcade', 'Racing',
                    'Sports', 'Mature Content', 'Atmospheric', 'Narrative', 'Sci-Fi & Fantasy', 'Supernatural',
                    'Post-apocalyptic', 'Humor', 'Music & Sound', 'Art & Design', 'Role-Playing',
                    'Management & Building', 'Stealth & Strategy', 'Exploration & Adventure', 'Fantasy & Mythology',
                    'Education & Learning', 'Platformer', 'Historical', 'Early Access', 'VR']
    for feature in all_features:
        if feature not in data:
            data[feature] = [0]
    df = pd.DataFrame(data)
    pred = predict_score(df)  # Pass the dataframe to predict_score
    pred = float(pred[0])
    # print(pred[0])
    return jsonify({'score': round(pred, 3)})


@app.route('/recommend_for_user', methods=['POST'])
def recommend_for_user():
    data = request.get_json()

    # Get the requested data
    user_id = data.get('userId')
    game_list = data.get('gameList')
    play_time_list = data.get('playTimeList')
    game_score_list = data.get('gameScoreList')
    top_k = data.get('topK')

    # Suppose your model accepts a dictionary containing a user id, a list of games, a list of game duration and a list of game ratings, and returns a list of games sorted by recommendation
    # And the model will make predictions based on this information and possibly other information
    user_data = {
        'user_id': user_id,
        'game_list': game_list,
        'play_time_list': play_time_list,
        'game_score_list': game_score_list
    }

    recommended_games = rec(user_data, top_k)

    # Return top top_k recommended games
    return jsonify({'recommended_games': recommended_games})


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=3000, debug=True)
