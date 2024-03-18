package com.newnnis.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.newnnis.dto.GameHistory;
import com.newnnis.mapper.GameHistoryMapper;

@Service
public class GameHistoryService {
    private final GameHistoryMapper gameHistoryMapper;

    @Autowired
    public GameHistoryService(GameHistoryMapper gameHistoryMapper) {
        this.gameHistoryMapper = gameHistoryMapper;
    }

    public void addGameHistory(GameHistory gameHistory) {
        gameHistoryMapper.insertGameHistory(gameHistory);
    }

    public GameHistory getGameHistoryById(String historyId) {
        return gameHistoryMapper.selectGameHistoryById(historyId);
    }

    public List<GameHistory> getAllGameHistories() {
        return gameHistoryMapper.selectAllGameHistories();
    }

    public void updateGameHistory(GameHistory gameHistory) {
        gameHistoryMapper.updateGameHistory(gameHistory);
    }

    public void deleteGameHistory(String historyId) {
        gameHistoryMapper.deleteGameHistory(historyId);
    }
    
    public List<GameHistory> searchRankByGroup(String userGroup) {
    	Map<String, Object> params = new HashMap<>();
        params.put("userGroup", userGroup);
    	return gameHistoryMapper.selectRankByGroup(params);
    }
}
