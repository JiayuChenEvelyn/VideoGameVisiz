package com.example.game_visualization.service.impl;

import com.example.game_visualization.Mapper.GameMapper;
import com.example.game_visualization.Mapper.UserMapper;
import com.example.game_visualization.entity.Game;
import com.example.game_visualization.service.GameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collections;

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
}
