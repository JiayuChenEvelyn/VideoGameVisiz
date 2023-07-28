package com.example.game_visualization.service;

import com.example.game_visualization.Mapper.GameMapper;
import com.example.game_visualization.entity.Game;
import com.example.game_visualization.entity.Genre;
import com.example.game_visualization.entity.User;
import com.example.game_visualization.service.ex.ServiceException;
import com.example.game_visualization.service.impl.GameServiceImpl;
import com.example.game_visualization.service.impl.UserServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;

//SpringBootTest:标注当前是一个测试类，不随项目一起打包
@SpringBootTest
//RunWith:表示启动这个单元测试类，传入的必须是SpringRunner的实例类型
@RunWith(SpringRunner.class)
public class GameServiceTests {
    @Autowired
    private GameServiceImpl gameService;
    @Autowired(required = false)
    private GameMapper gameMapper;
    /**
     * 1.必须被@Test注解修饰
     * 2.返回值必须为void
     * 3.方法的参数列表不指定任何类型
     * 4.必须为public
     */
    @Test
    public void getTop10(){
        ArrayList<Game> data=gameMapper.findByThreeTags("Shooter","X360","0");
        ArrayList<Game> result=gameService.showTop10(data);
        System.out.println(result);
        System.out.println(result.size());
    }
    @Test
    public void getPAndY(){
        ArrayList<Game> data=gameMapper.findByYearAndPlatform("2001","Wii");
        ArrayList<Genre> result=gameService.showPlatformGenreProportion(data);
        System.out.println(result);
        System.out.println(result.size());
    }
    @Test
    public void RateGame(){
        Float rating=70.43F;
        Game game=gameMapper.findByGameName("Wii Fit");
        gameService.RateGame(game,rating);
        System.out.println("OK");
    }
}
