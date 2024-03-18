package com.newnnis.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.newnnis.dto.ApiResponse;
import com.newnnis.dto.Match;
import com.newnnis.service.MatchService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/match")
public class MatchController {
	private final MatchService matchService;
	
	@GetMapping("/searchMatches")
    public ApiResponse<List<Match>> searchMatches(@RequestParam String userGroup, @RequestParam String matchDate) {
		return ApiResponse.<List<Match>>builder().data(matchService.searchMatches(userGroup,matchDate)).build();
    }
}
