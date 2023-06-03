package com.example.game_visualization.controller;

import com.example.game_visualization.service.ex.*;
import com.example.game_visualization.util.JsonResult;
import org.springframework.web.bind.annotation.ExceptionHandler;

import javax.servlet.http.HttpSession;

/**
 * 控制层类的基类，主要用于捕获异常
 */
public class BaseController {
    //操作成功的状态码
    public static final int OK=200;
    //请求处理方法，返回值是需要传递给前端的数据
    @ExceptionHandler(ServiceException.class)//用于统一处理抛出的异常
    public JsonResult<Void> handleException(Throwable e){
        JsonResult<Void> result=new JsonResult<>(e);
        if(e instanceof UsernameDuplicatedException){
            result.setState(4000);
            result.setMessage("Duplicate username");
        } else if(e instanceof InsertException){
            result.setState(5000);
            result.setMessage("Unknown insert error");
        } else if(e instanceof PasswordNotMatchException){
            result.setState(5001);
            result.setMessage("incorrect password!");
        } else if(e instanceof UserNotFoundException){
            result.setState(5002);
            result.setMessage("Username does not exist");
        } else if(e instanceof UpdateException) {
            result.setState(5003);
            result.setMessage("Unknown update error");
        }
        return result;
    }

    /**
     * 获取session对象的uid
     * @param session
     * @return uid
     */
    protected final Integer getUidFromSession(HttpSession session){
        return Integer.valueOf(session.getAttribute("uid").toString());
    }
    /**
     * 获取session对象的username
     * @param session
     * @return username
     */
    protected final String getUsernameFromSession(HttpSession session){
        return session.getAttribute("username").toString();
    }
}
