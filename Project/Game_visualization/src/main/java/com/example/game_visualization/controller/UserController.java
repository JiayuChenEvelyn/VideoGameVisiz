package com.example.game_visualization.controller;

import com.example.game_visualization.entity.User;
import com.example.game_visualization.service.IUserService;
import com.example.game_visualization.util.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpSession;

@RestController
@RequestMapping("users")
public class UserController extends BaseController{
    @Autowired
    private IUserService userService;

    /*1.接收数据方式：请求处理方法的参数列表设置为pojo类型(比如下面的User)来接收前端的数据
    SpringBoot会将前端url地址中的参数名和pojo类的属性名进行比较(比如username和password)，
    如果这两个名称相同，则将值注入pojo类对应的属性上.
     */
    @CrossOrigin(origins = {"http://localhost:3000"})
    @RequestMapping("reg")
    public JsonResult<Void> register(User user){
        userService.register(user);
        return new JsonResult<Void>(OK);
    }
    /*2.接收数据方式：请求处理方法的参数列表设置为非pojo类型(比如下面的两个String)来接收前端的数据
    SpringBoot会将请求的参数名和方法的参数名进行比较，如果这两个名称相同，则将自动完成依赖注入.
     */
    @CrossOrigin(origins = {"http://localhost:3000"})
    @RequestMapping("login")
    public JsonResult<User> login(String username, String password, HttpSession session){
        User userData=userService.login(username,password);
        //向session对象中完成数据的绑定
        session.setAttribute("uid",userData.getUid());
        session.setAttribute("username",userData.getUsername());
        return new JsonResult<User>(OK,userData);
    }
    @CrossOrigin(origins = {"http://localhost:3000"})
    @RequestMapping("changePassword")
    public JsonResult<User> changePassword(String oldPassword, String newPassword, HttpSession session){
        Integer uid=getUidFromSession(session);
        String username=getUsernameFromSession(session);
        userService.changePassword(uid,username,oldPassword,newPassword);
        return new JsonResult<User>(OK);
    }
}
