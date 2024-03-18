package com.newnnis.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.newnnis.dto.User;
import com.newnnis.mapper.UserMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

@RequiredArgsConstructor
@Service
@Slf4j
public class UserService {
	private final UserMapper userMapper;

	public List<User> searchAllUsers() {
		List<User> result = userMapper.selectAllUsers();
		log.info("result {}", result);
		return result;
	}

}
