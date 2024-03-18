package com.newnnis.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.newnnis.dto.ApiResponse;
import com.newnnis.dto.User;
import com.newnnis.service.UserService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/user")
public class UserController {
	private final UserService userService;	

	@GetMapping("/searchAllUsers")
	public ApiResponse<List<User>> searchAllUsers() {
		return ApiResponse.<List<User>>builder().data(userService.searchAllUsers()).build();
	}
}
