package com.example.game_visualization.interceptor;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class LoginInterceptor implements HandlerInterceptor {
    /**在请求处理之前被调用该方法
     * 检测session对象是否有uid数据，有就放行，没有就重定向到登陆页面
     * @param request 请求对象
     * @param response 响应对象
     * @param handler url+controller的映射
     * @return true表示放行当前请求，false表示拦截当前请求
     * @throws Exception
     */
    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
//        Object obj=request.getSession().getAttribute("uid");
//        if(obj==null){//说明用户没有登陆
//            response.sendRedirect("/web/login.html");//重定向到登陆页面
//            //结束后续调用
//            return false;
//        }
//        //登陆后才进的其他页面
//        return true;
        return true;
    }
    //ModelAndView对象返回后被调用
//    @Override
//    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
//        HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
//    }
    //在整个请求资源执行完毕后执行，用于进行资源清理工作
//    @Override
//    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
//        HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
//    }
}
