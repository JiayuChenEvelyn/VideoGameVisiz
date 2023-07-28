package com.example.game_visualization.service;

import com.example.game_visualization.entity.Game;
import com.example.game_visualization.entity.Genre;
import com.example.game_visualization.entity.User;

import java.util.ArrayList;

public interface GameService {
    /**
     * 展示全球销量前十的游戏
     * @param data
     * @return 前十游戏列表
     */
    ArrayList<Game> showTop10(ArrayList<Game> data);

    /**
     * 根据平台和年份查游戏
     * @param data
     * @return 符合要求的游戏列表
     */
    ArrayList<Genre> showPlatformGenreProportion(ArrayList<Game> data);
    void RateGame(Game game,Float rating);
    Game showGameDetail(String gameName);
    Integer showGenreCount(String genre);
}
