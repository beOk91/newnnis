package com.newnnis.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.newnnis.dto.ApiResponse;
import com.newnnis.dto.GameHistory;
import com.newnnis.service.GameHistoryService;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/gameHistory")
public class GameHistoryController {
    private final GameHistoryService gameHistoryService;
    
    @GetMapping("/searchRankByGroup")
    public ApiResponse<List<GameHistory>> selectRankByGroup(@RequestParam String userGroup){
    	return ApiResponse.<List<GameHistory>>builder().data(gameHistoryService.searchRankByGroup(userGroup)).build();
    }
    
//    @PostMapping
//    public void addGameHistory(@RequestBody GameHistory gameHistory) {
//        gameHistoryService.addGameHistory(gameHistory);
//    }
//
//    @GetMapping("/{historyId}")
//    public GameHistory getGameHistoryById(@PathVariable String historyId) {
//        return gameHistoryService.getGameHistoryById(historyId);
//    }
//
//    @GetMapping
//    public List<GameHistory> getAllGameHistories() {
//        return gameHistoryService.getAllGameHistories();
//    }
//
//    @PutMapping
//    public void updateGameHistory(@RequestBody GameHistory gameHistory) {
//        gameHistoryService.updateGameHistory(gameHistory);
//    }
//
//    @DeleteMapping("/{historyId}")
//    public void deleteGameHistory(@PathVariable String historyId) {
//        gameHistoryService.deleteGameHistory(historyId);
//    }
   
}
