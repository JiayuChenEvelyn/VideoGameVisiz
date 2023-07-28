

from pathlib import Path
import pandas as pd
# import numpy as np
from sklearn.metrics.pairwise import cosine_similarity
from sklearn.preprocessing import StandardScaler, LabelEncoder
from sklearn.feature_extraction.text import TfidfVectorizer
from scipy.sparse import hstack, csr_matrix
import joblib

import warnings
warnings.filterwarnings("ignore")


df = pd.read_csv(Path("data.csv"))


df= df.drop('released_date', axis=1)
df = df.drop('tags', axis=1)
df = df.drop('url', axis=1)
df = df.drop('Other', axis=1)
df = df.drop('price_range', axis=1)
df = df.drop('score_range', axis=1)


list_of_tags = [ 'Action','First-Person','Third Person', 'Adventure', 'Strategy', 'RPG', 'Simulation', 'Horror', 'Survival', 'Puzzle',
  'Indie',  'Retro',  'Pixel Graphics',  'Rouguelike',  '2D Platform', '3D Platform',  'Multiplayer',  'Casual',  'Visual Novel',  'Otome',  'Arcade',  'Racing',  'Sports',  'Early Access',  'Mature Content',
  'Atmospheric',  'Narrative',  'Sci-Fi & Fantasy',
  'Supernatural',  'Post-apocalyptic',  'Humor',  'Music & Sound',
  'Art & Design',  'Role-Playing',  'Management & Building',  'Stealth & Strategy',  'Exploration & Adventure', 'Fantasy & Mythology', 'Education & Learning','VR']




features = ['developers', 'publishers', 'price', 'review_score', 'supported_languages', 'released_year'] + list_of_tags
df_features = df[features]


num_features = ['price', 'review_score', 'released_year']
scaler = StandardScaler()
df_features.loc[:, num_features] = scaler.fit_transform(df_features[num_features])


cat_features = ['developers', 'publishers', 'supported_languages']
for feature in cat_features:
    le = LabelEncoder()
    df_features[feature] = le.fit_transform(df_features[feature])


vectorizer = TfidfVectorizer(stop_words='english')

tfidf_matrix = vectorizer.fit_transform(df['description'])

features_sparse = csr_matrix(df_features.values)

combined_features = hstack([features_sparse, tfidf_matrix])

cosine_sim = cosine_similarity(combined_features, combined_features)

joblib.dump(cosine_sim, 'cosine_sim.pkl')

print("Model Finish")





