from GR_PS.model_training import QionghHaRecommender, train_qiongha
from GR_PS.util import reset_raw_data


def reset_system():
    reset_raw_data()
    train_qiongha()

def rec(user_data, top_k):
    uid = user_data['user_id']
    game_list = user_data['game_list']
    hours = user_data['play_time_list']
    scores = user_data['game_score_list']

    model = QionghHaRecommender(if_load_old=True)
    rec_list = model.recommend_new_user(uid, game_list, hours, scores, top_k)
    model.clean_df()

    return rec_list


# print(rec())
