import numpy as np
import pandas as pd
import random

# 0.3 -
def reset_raw_data():
    print('reset_raw_data-----')
    data = pd.read_csv('steam_users.csv')
    data['score'] = 5 + data['hours'].apply(lambda x: min(x,8)*5/8 + random.random()/20)
    data['score'] = data['score'].apply(lambda x: min(x,10.00)).round(2)
    data['implicit'] = data['buy'] + data['hours'].apply(lambda x: min((x-0.3),4)/10) + data['score'].apply(lambda x: (x-5)/20)
    data['implicit'] = data['implicit'].round(2)


    data['user_id'] = data['user_id'].astype('category').cat.codes
    data['user_id'] = data['user_id'].apply(lambda x: 'old_'+str(x))
    data.to_csv('steam_users_new.csv', index=False)
