import numpy as np
import pandas as pd
import joblib

# Loda Model
xgb_best_model = joblib.load('xgb_best_model.pkl')

def predict_score(data):
    # Make predictions based on input data
    pred = xgb_best_model.predict(data)
    return pred
