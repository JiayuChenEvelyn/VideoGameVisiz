package com.example.game_visualization.mapper;

import com.example.game_visualization.Mapper.GameMapper;
import com.example.game_visualization.Mapper.UserMapper;
import com.example.game_visualization.entity.Game;
import com.example.game_visualization.entity.User;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.ArrayList;
import java.util.HashMap;

//SpringBootTest:标注当前是一个测试类，不随项目一起打包
@RunWith(SpringRunner.class)
@SpringBootTest
//RunWith:表示启动这个单元测试类，传入的必须是SpringRunner的实例类型
public class GameMapperTests {
    @Autowired(required = false)
    private GameMapper gameMapper;
    /**
     * 1.必须被@Test注解修饰
     * 2.返回值必须为void
     * 3.方法的参数列表不指定任何类型
     * 4.必须为public
     */
    @Test
    public void findByGameName(){
        Game game =gameMapper.findByGameName("Wii Sports");
        System.out.println(game);
    }
    @Test
    public void findByGameId() {
        Integer id = 10001;
        Game result = gameMapper.findByGameId(id);
        System.out.println(result);
    }
    @Test
    public void findByGameGenre() {
        ArrayList<Game> result=gameMapper.findByGameGenre("Sports");
        System.out.println(result);
    }
    @Test
    public void findByThreeTags() {
        ArrayList<Game> result=gameMapper.findByThreeTags("Sports","Wii","2007");
        System.out.println(result);
    }
    @Test
    public void findByYearAndPlatform() {
        ArrayList<Game> result=gameMapper.findByYearAndPlatform("1000","PC");
        System.out.println(result.size());
    }
    @Test
    public void updateRatingByGameName() {
        Float rating= 55.2F;
        String gameName="Grand Theft Auto V";
        Integer rows = gameMapper.updateRatingByGameName(gameName,rating);
        System.out.println("rows=" + rows);
    }
    @Test
    public void findGameCountByGenre() {
        Integer result=gameMapper.findGameCountByGenre("Sports");
        System.out.println(result);
    }
}
