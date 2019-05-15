package com.eme.service;

import com.eme.mapper.IUsersMapper;
import com.eme.pojo.Users;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UsersServiceImpl implements IUsersService {

    @Autowired
    private IUsersMapper UsersMapper;

    @Override
    public int deleteByPrimaryKey(Integer usid) {
        return UsersMapper.deleteByPrimaryKey(usid);
    }

    @Override
    public int insert(Users users) {
        return UsersMapper.insert(users);
    }

    @Override
    public List<Users> selectAllUsers() {
        return UsersMapper.selectAllUsers();
    }

    @Override
    public Users selectByPrimaryKey(Integer usid) {
        return UsersMapper.selectByPrimaryKey(usid);
    }

    @Override
    public int updateByUsers(Users oldUsers, Users newUsers) {
        return UsersMapper.updateByUsers(oldUsers, newUsers);
    }

    @Override
    public int updateByPrimaryKey(Integer usid) {
        return UsersMapper.updateByPrimaryKey(usid);
    }
}
