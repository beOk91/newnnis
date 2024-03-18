package com.newnnis.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.newnnis.dto.Match;

@Mapper
public interface MatchMapper {
	List<Match> selectMatchesByGroupAndDate(Map<String, Object> params);
}
