package com.newnnis.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.newnnis.dto.Match;
import com.newnnis.mapper.MatchMapper;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class MatchService {
	private final MatchMapper matchMapper;
	public List<Match> searchMatches(String userGroup, String matchDate) {
		Map<String, Object> params = new HashMap<>();
        params.put("userGroup", userGroup);
        params.put("matchDate", matchDate);
        return matchMapper.selectMatchesByGroupAndDate(params);

	}

}
