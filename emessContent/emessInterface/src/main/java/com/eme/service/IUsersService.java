package com.eme.service;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.eme.pojo.Users;

public interface IUsersService {

    int deleteByPrimaryKey(Integer usid);

    int insert(Users users);

    List<Users> selectAllUsers();

    Users selectByPrimaryKey(Integer usid);

    int updateByUsers(@Param("oldUsers") Users oldUsers, @Param("newUsers") Users newUsers);

    int updateByPrimaryKey(Integer usid);
}