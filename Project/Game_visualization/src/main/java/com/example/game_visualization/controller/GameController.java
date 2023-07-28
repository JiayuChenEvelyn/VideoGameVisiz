package com.example.game_visualization.controller;

import com.example.game_visualization.Mapper.GameMapper;
import com.example.game_visualization.entity.Game;
import com.example.game_visualization.entity.Genre;
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
    @CrossOrigin(origins = {"http://localhost:3000"})
    @RequestMapping("showPlatformGenreProportion")
    public JsonResult<ArrayList<Genre>> showPlatformGenreProportion(String platform,String year) {
        ArrayList<Game> data = gameMapper.findByYearAndPlatform(year,platform);
        ArrayList<Genre> result = gameService.showPlatformGenreProportion(data);
        return new JsonResult<ArrayList<Genre>>(OK, result);
    }
    @CrossOrigin(origins = {"http://localhost:3000"})
    @RequestMapping("updateRating")
    public JsonResult<Float> updateRating(String gameName,Float rating) {
        Game game=gameMapper.findByGameName(gameName);
        gameService.RateGame(game,rating);
        Game newGame=gameMapper.findByGameName(gameName);
        Float newRating=newGame.getRating();
        return new JsonResult<Float>(OK,newRating);
    }
    @CrossOrigin(origins = {"http://localhost:3000"})
    @RequestMapping("showGameDetail")
    public JsonResult<Game> showGameDetail(String gameName) {
        Game result=gameService.showGameDetail(gameName);
        return new JsonResult<Game>(OK,result);
    }
    @CrossOrigin(origins = {"http://localhost:3000"})
    @RequestMapping("showGenreCount")
    public JsonResult<Integer> showGenreCount(String genre) {
        Integer result=gameService.showGenreCount(genre);
        return new JsonResult<Integer>(OK,result);
    }
}
