package com.example.game_visualization.service.impl;

import com.example.game_visualization.Mapper.UserMapper;
import com.example.game_visualization.entity.User;
import com.example.game_visualization.service.IUserService;
import com.example.game_visualization.service.ex.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.DigestUtils;

import java.util.UUID;

//@Service:将对象交给Spring来管理，自动完成对象的创建和维护
@Service
public class UserServiceImpl implements IUserService {
    @Autowired(required = false)
    private UserMapper userMapper;
    //注册的实现方法
    @Override
    public void register(User user) {
        //密码加密算法md5，盐值+password+盐值(随机的串)
        String oldPassword=user.getPassword();
        String salt= UUID.randomUUID().toString().toUpperCase();
        user.setSalt(salt);
        String md5Password=getMD5Password(oldPassword,salt);
        //将加密后的密码重新补全设置到user对象里面
        user.setPassword(md5Password);
        String username=user.getUsername();
        User result=userMapper.findByUsername(username);
        if(result!=null){
            throw new UsernameDuplicatedException("Duplicate username");
        }
        Integer rows=userMapper.insert(user);
        if(rows!=1){
            throw new InsertException("Insert error");
        }
    }
    //登陆的实现方法
    @Override
    public User login(String username,String password){
        //根据用户名查询用户数据是否存在
        User result=userMapper.findByUsername(username);
        if(result==null){
            throw  new UserNotFoundException("Username does not exist");
        }
        //检测密码是否匹配
        //原来用户注册后加密的密码
        String oldMd5Password=result.getPassword();
        //加密所用的盐值
        String salt=result.getSalt();
        //把用户登陆时输入的密码以相同方式加密
        String newMd5Password=getMD5Password(password,salt);
        if(!newMd5Password.equals(oldMd5Password)){
            throw new PasswordNotMatchException("incorrect password!");
        }
        //返回给主界面展示的用户信息，其他的比如盐值和密码不用传递
        User user=new User();
        user.setUid(result.getUid());
        user.setUsername(result.getUsername());
        return user;
    }

    @Override
    public void changePassword(String username, String oldPassword, String newPassword) {
        User result=userMapper.findByUsername(username);
        if(result==null){
            throw  new UserNotFoundException("Username does not exist");
        }
        //原始密码和数据库中密码进行比较
        String oldMd5Password=getMD5Password(oldPassword,result.getSalt());
        if(!result.getPassword().equals(oldMd5Password)){
            throw new PasswordNotMatchException("incorrect old password!");
        }
        //将新密码进行加密再更新到数据库
        String newMd5Password=getMD5Password(newPassword,result.getSalt());
        Integer rows=userMapper.updatePasswordByUsername(username,newMd5Password);
        if(rows!=1){
            throw new UpdateException("Update error");
        }
    }

    private String getMD5Password(String password,String salt){
        //md5方法调用
        password=DigestUtils.md5DigestAsHex((salt+password+salt).getBytes()).toUpperCase();
        return password;
    }
}
