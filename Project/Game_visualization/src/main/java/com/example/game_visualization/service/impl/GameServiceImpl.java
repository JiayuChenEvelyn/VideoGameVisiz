package com.example.game_visualization.service.impl;

import com.example.game_visualization.Mapper.GameMapper;
import com.example.game_visualization.entity.Game;
import com.example.game_visualization.entity.Genre;
import com.example.game_visualization.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

@Service
public class GameServiceImpl implements GameService {
    @Autowired(required = false)
    private GameMapper gameMapper;
    @Override
    public ArrayList<Game> showTop10(ArrayList<Game> data) {
        Collections.sort(data,(a,b)->{
            if(b.getGlobalSales()-a.getGlobalSales()>=0){
                return 1;
            }
            else return -1;
        });
        ArrayList<Game> result=new ArrayList<>();
        if(data.size()>10){
            for(int i=0;i<10;i++){
                result.add(data.get(i));
            }
        }
        else{
            for(int i=0;i<data.size();i++){
                result.add(data.get(i));
            }
        }
        return result;
    }
    public ArrayList<Genre> showPlatformGenreProportion(ArrayList<Game> data){
        HashMap<String,Integer> map=new HashMap<>();
        ArrayList<Genre> res=new ArrayList<>();
        for(int i=0;i<data.size();i++){
            map.put(data.get(i).getGenre(),map.getOrDefault(data.get(i).getGenre(),0)+1);
        }
        for(String genre:map.keySet()){
            Genre genre1=new Genre();
            genre1.setId(genre);
            genre1.setLabel(genre);
            genre1.setValue(map.get(genre));
            res.add(genre1);
        }
        return res;
    }

    @Override
    public void RateGame(Game game,Float rating) {
        float newRating=(game.getRating()*game.getRateCount()+rating*20)/(game.getRateCount()+1);
        gameMapper.updateRateCountByGameName(game.getGameName(),game.getRateCount()+1);
        gameMapper.updateRatingByGameName(game.getGameName(),newRating);
    }

    @Override
    public Game showGameDetail(String gameName) {
        Game result=gameMapper.findByGameName(gameName);
        return result;
    }

    @Override
    public Integer showGenreCount(String genre) {
        Integer count=gameMapper.findGameCountByGenre(genre);
        return count;
    }
}
