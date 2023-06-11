package com.example.game_visualization.Mapper;

import com.example.game_visualization.entity.Game;

import java.util.ArrayList;

public interface GameMapper {
    /**
     * 根据游戏名查询游戏
     * @param gameName
     * @return 有就返回游戏对象，否则返回null
     */
    Game findByGameName(String gameName);
    /**
     * 根据id查询游戏
     * @param id
     * @return 有就返回游戏对象，否则返回null
     */
    Game findByGameId(Integer id);
    ArrayList<Game> findByGameGenre(String genre);
    ArrayList<Game> findByThreeTags(String genre,String platform,String year);
}
