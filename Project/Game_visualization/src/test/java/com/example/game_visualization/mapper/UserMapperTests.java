package com.example.game_visualization.mapper;

import com.example.game_visualization.Mapper.UserMapper;
import com.example.game_visualization.entity.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

//SpringBootTest:标注当前是一个测试类，不随项目一起打包
@RunWith(SpringRunner.class)
@SpringBootTest
//RunWith:表示启动这个单元测试类，传入的必须是SpringRunner的实例类型
public class UserMapperTests {
    @Autowired(required = false)
    private UserMapper userMapper;
    /**
     * 1.必须被@Test注解修饰
     * 2.返回值必须为void
     * 3.方法的参数列表不指定任何类型
     * 4.必须为public
     */
    @Test
    public void insert(){
        User user=new User();
        user.setUsername("fzh895");
        user.setPassword("123");
        Integer row=userMapper.insert(user);
        System.out.println(row);
    }
    @Test
    public void findByUsername(){
        User user=userMapper.findByUsername("fzh");
        System.out.println(user);
    }
    @Test
    public void updatePasswordByUid() {
        String username="Tom";
        String password = "123";
        Integer rows = userMapper.updatePasswordByUsername(username, password);
        System.out.println("rows=" + rows);
    }
    @Test
    public void findByUid() {
        Integer uid = 7;
        User result = userMapper.findByUid(uid);
        System.out.println(result);
    }
}
