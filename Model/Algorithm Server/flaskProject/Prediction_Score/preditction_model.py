from pathlib import Path

import numpy as np
import pandas as pd
import joblib

from sklearn.impute import SimpleImputer
from sklearn.compose import ColumnTransformer
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.model_selection import GridSearchCV, KFold, train_test_split
from category_encoders import TargetEncoder
from xgboost import XGBRegressor


import warnings
warnings.filterwarnings("ignore")


df_new = pd.read_csv(Path("data.csv"))

# Remove unnecessary columns
df_new = df_new.drop('released_date', axis=1)
df_new = df_new.drop('tags', axis=1)
df_new = df_new.drop('url', axis=1)
df_new = df_new.drop('description', axis=1)
df_new = df_new.drop('Other', axis=1)
df_new = df_new.drop('price_range', axis=1)
df_new = df_new.drop('score_range', axis=1)

# data division
X = df_new.drop(["review_score", "name"], axis=1)
y = df_new['review_score']
X_train, X_test, y_train, y_test = train_test_split(X, y, random_state=0)

# Define the categorical features to be Target encoded and the numerical features to be standardized
categorical_features = ['developers', 'publishers', 'supported_languages']
num_features = ['price','all_reviews','positice_reviews']


# Define the Target encoder
target_enc = TargetEncoder(cols=categorical_features)

# Define the pipeline for numerical features
num_pipeline = Pipeline([
    ('imputer', SimpleImputer(strategy="median")),
    ('std_scaler', StandardScaler()),
])

# Create a preprocessor
preprocessor = ColumnTransformer(
    transformers=[
        ('num', num_pipeline, num_features)
    ])

#

# define XGBoost model
xgb_regressor = XGBRegressor(random_state=42)

# A pipeline that includes Target encoding, preprocessing, and XGBoost models
pipeline = Pipeline(steps=[
    ('target_enc', target_enc),
    ('preprocessor', preprocessor),
    ('regressor', xgb_regressor)
])

# Define parameter grid
param_grid = {
    'regressor__n_estimators': [100, 200],
    'regressor__max_depth': [6, 10],
    'regressor__learning_rate': [0.01, 0.1],
}

# Grid Search
kfold = KFold(n_splits=10, shuffle=True, random_state=42)
grid_search = GridSearchCV(pipeline, param_grid, cv=kfold, scoring='neg_mean_squared_error', n_jobs=-1)
grid_search.fit(X_train, y_train)

joblib.dump(grid_search.best_estimator_, 'xgb_best_model.pkl')

