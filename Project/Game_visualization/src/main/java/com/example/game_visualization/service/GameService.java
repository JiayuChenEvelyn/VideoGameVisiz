package com.example.game_visualization.service;

import com.example.game_visualization.entity.Game;
import com.example.game_visualization.entity.User;

import java.util.ArrayList;

public interface GameService {
    /**
     * 展示全球前十的游戏
     * @param data
     */
    ArrayList<Game> showTop10(ArrayList<Game> data);
}
