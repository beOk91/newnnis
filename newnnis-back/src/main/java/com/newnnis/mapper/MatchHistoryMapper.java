package com.newnnis.mapper;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import com.newnnis.dto.GameHistory;

@Mapper
public interface GameHistoryMapper {
	void insertGameHistory(GameHistory gameHistory);
    GameHistory selectGameHistoryById(@Param("historyId") String historyId);
    List<GameHistory> selectAllGameHistories();
    void updateGameHistory(GameHistory gameHistory);
    void deleteGameHistory(@Param("historyId") String historyId);
    List<GameHistory> selectRankByGroup(Map<String, Object> params);
}
