from pathlib import Path

import joblib
import pandas as pd


df = pd.read_csv(Path("data.csv"))

# Create a map of game names and indices
game_indices = pd.Series(df.index, index=df['name']).drop_duplicates()

# Load Model
cosine_sim = joblib.load('cosine_sim.pkl')

def get_recommendations(game_name):
    # Get the index of the game
    idx = game_indices[game_name]

    # Get the similarity of all games
    sim_scores = list(enumerate(cosine_sim[idx]))

    # Sort by similarity
    sim_scores = sorted(sim_scores, key=lambda x: x[1], reverse=True)

    sim_scores = sim_scores[1:11]

    similar_game_indices = [i[0] for i in sim_scores]

    return df['name'].iloc[similar_game_indices]
