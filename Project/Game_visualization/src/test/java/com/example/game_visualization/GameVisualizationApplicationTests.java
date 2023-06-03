package com.example.game_visualization;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.sql.DataSource;
import java.sql.SQLException;

@SpringBootTest
class GameVisualizationApplicationTests {
    @Autowired//自动装配
    private DataSource dataSource;
    @Test
    void contextLoads() {
    }

    /**
     * 输出Hikari数据库连接池就说明连接成功
     * HikariProxyConnection@969407243 wrapping com.mysql.cj.jdbc.ConnectionImpl@645dc557
     * @throws SQLException
     */
    @Test
    void getConnection() throws SQLException {
        System.out.println(dataSource.getConnection());
    }
}
