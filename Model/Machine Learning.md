# Machine Learning

This readme.md document is about the COMP7705-Group Project Machine Learning Part. This document describe the whole Machine Learning and Algorithm Server File roles.

## Model Building Document Description

#### Prediction Model

EDA & Predict.ipynb is used to finish the EDA and Prediction Function

#### Recommendation Model (Content-Based)

Recommendation_Content Based.ipynb is used to finish the Content-Based Recommendation Function (Find the similar games)

#### Recommendation Model (Personalized)

util.ipynb is the notebook used to preprocess steam user behavior dataset.

model_train.ipynb is the notebookk we used to train model and evaluate it.

rec_finall_py is the built-in pac for back end site.

## Algorithm Server Document Description:

The algorithm server is based on the Flask Framework:

- In GR-CB, the recommendation_model.py is used to build and save the model, the recommendation.py is used to call the recommendation function

- In Prediction_Score, the prediction_model.py is used to build and save the model, the prediction.py is used to call the prediction function

- In GR_PS, util.ipynb is the notebook used to preprocess steam user behavior dataset.

  model_train.ipynb is the notebookk we used to train model and evaluate it. rec_finall_py is the built-in pac for back end site.
  
  After finish running the GR-CB and Prediction_Score files, the xgb_best_model.pkl & cosine_sim.pkl need to put  in the same level directory as flaskProject


## License

These files are for learning and communication about COMP7705 Group Projecr only.

## Contact Us

If you have any questions or feedback, please send an email to 

daizy109@connect.hku.hk

U3608746@connect.hku.hk