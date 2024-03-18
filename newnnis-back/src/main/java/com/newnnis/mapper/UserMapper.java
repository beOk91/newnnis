package com.newnnis.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.newnnis.dto.User;

@Mapper
public interface UserMapper {
	List<User> selectAllUsers();
}
