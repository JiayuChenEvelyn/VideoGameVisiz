package com.example.game_visualization.Mapper;

import com.example.game_visualization.entity.User;

public interface UserMapper {
    /**
     * 插入用户的数据
     * @param user
     * @return 受到增，删，改所影响的行数，根据返回值确定语句是否执行
     */
    Integer insert(User user);

    /**
     * 根据用户名查询用户
     * @param username
     * @return 有就返回用户对象，否则返回null
     */
    User findByUsername(String username);

    /**
     * 根据username更新密码
     * @param username
     * @return 受到增，删，改所影响的行数
     */
    Integer updatePasswordByUsername(String username,String password);

    /**
     * 根据uid查询用户
     * @param uid
     * @return 有就返回用户对象，否则返回null
     */
    User findByUid(Integer uid);
}
