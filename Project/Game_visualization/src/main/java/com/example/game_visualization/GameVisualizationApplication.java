package com.example.game_visualization;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
//MapperScan注解用来指定项目的Mapper接口的路径，在项目启动时会自动加载所有接口文件
@MapperScan("com.example.game_visualization.Mapper")
public class GameVisualizationApplication {

    public static void main(String[] args) {
        SpringApplication.run(GameVisualizationApplication.class, args);
    }

}
