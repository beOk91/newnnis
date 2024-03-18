package com.newnnis.dto;

import lombok.Data;

@Data
public class GameHistory {
    private String historyId;
    private String matchSeq;
    private String userId;
    private String partnerId; // NULL 가능 필드는 Wrapper 클래스 사용
    private String isWin;
    private String group;
    private Integer matchPoint; // NULL 가능 필드는 Wrapper 클래스 사용
    private String matchDate; // LocalDateTime 사용을 권장
    private String name;
    private String winPoints;
    private String winCount;
    private String loseCount;
    private String matchCount;
    private String pointCount;
    private String concedeCount;
    
}
