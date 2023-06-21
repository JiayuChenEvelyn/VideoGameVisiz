package com.example.game_visualization.service;

import com.example.game_visualization.Mapper.UserMapper;
import com.example.game_visualization.entity.User;
import com.example.game_visualization.service.ex.ServiceException;
import com.example.game_visualization.service.impl.UserServiceImpl;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

//SpringBootTest:标注当前是一个测试类，不随项目一起打包
@SpringBootTest
//RunWith:表示启动这个单元测试类，传入的必须是SpringRunner的实例类型
@RunWith(SpringRunner.class)
public class UserServiceTests {
    @Autowired
    private UserServiceImpl userService;
    /**
     * 1.必须被@Test注解修饰
     * 2.返回值必须为void
     * 3.方法的参数列表不指定任何类型
     * 4.必须为public
     */
    @Test
    public void register(){
        try {
            User user=new User();
            user.setUsername("fzh7");
            user.setPassword("123");
            userService.register(user);
            System.out.println("OK");
        } catch (ServiceException e) {
            System.out.println(e.getClass().getSimpleName());
            System.out.println(e.getMessage());
        }
    }
    @Test
    public void login(){
       User user= userService.login("fzh7","123");
       System.out.println(user.toString());
    }
    @Test
    public void changePassword() {
        try {
            String username = "Tom00";
            String oldPassword = "888888";
            String newPassword = "123";
            userService.changePassword(username, oldPassword, newPassword);
            System.out.println("Change password successful!");
        } catch (ServiceException e) {
            System.out.println("Change password fail! " + e.getClass().getSimpleName());
            System.out.println(e.getMessage());
        }
    }

}
