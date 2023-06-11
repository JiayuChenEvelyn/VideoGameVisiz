package com.example.game_visualization.controller;

import com.example.game_visualization.Mapper.GameMapper;
import com.example.game_visualization.entity.Game;
import com.example.game_visualization.entity.User;
import com.example.game_visualization.service.GameService;
import com.example.game_visualization.service.IUserService;
import com.example.game_visualization.util.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;
import java.util.ArrayList;

@RestController
@RequestMapping("game")
public class GameController extends BaseController{
    @Autowired
    private GameService gameService;
    @Autowired(required = false)
    private GameMapper gameMapper;
    @CrossOrigin(origins = {"http://localhost:3000"})
    @RequestMapping("showTop10")
    public JsonResult<ArrayList<Game>> showTop10(String genre,String platform,String year) {
        ArrayList<Game> data = gameMapper.findByThreeTags(genre, platform, year);
        ArrayList<Game> result = gameService.showTop10(data);
        return new JsonResult<ArrayList<Game>>(OK, result);
    }
}
