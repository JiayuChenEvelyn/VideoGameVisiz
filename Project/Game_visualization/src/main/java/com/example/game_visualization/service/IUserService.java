package com.example.game_visualization.service;

import com.example.game_visualization.entity.User;

//用户模块接口
public interface IUserService {
    /**
     * 用户注册方法
     * @param user
     */
    void register(User user);

    /**
     * 用户注册方法
     * @param username
     * @param password
     * @return 当前匹配的用户数据，没有就返回null
     */
    User login(String username,String password);
    void changePassword(String username,String oldPassword,String newPassword);

}
