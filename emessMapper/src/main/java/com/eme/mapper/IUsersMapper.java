package com.eme.mapper;

import com.eme.pojo.Users;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface IUsersMapper {

    int deleteByPrimaryKey(Integer usid);

    int insert(Users users);

    List<Users> selectAllUsers();

    Users selectByPrimaryKey(Integer usid);

    int updateByUsers(@Param("oldUsers") Users oldUsers, @Param("newUsers") Users newUsers);

    int updateByPrimaryKey(Integer usid);
}