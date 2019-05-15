package com.eme.controller;

import com.eme.pojo.Users;
import com.eme.service.IUsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.annotation.Resource;
import java.util.List;

@Controller
public class UsersController {

    @Resource
    private IUsersService iUsersService;
    /*@Resource
    private IUsersService iUsersService;*/


    @RequestMapping("Users")
    @ResponseBody
    public List<Users> getAllUsers() {
        return iUsersService.selectAllUsers();
    }

    @RequestMapping("/submitRegister")
    public String submitRegister(Users users) {
        System.out.println(users);
        iUsersService.insert(users);
        return "login";
    }
}
