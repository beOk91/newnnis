package com.newnnis.dto;

import org.springframework.http.HttpStatus;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.RequiredArgsConstructor;

@Data
@Builder
@AllArgsConstructor
public class ApiResponse<T> {
	@Builder.Default
    private int status = HttpStatus.OK.value();

    @Builder.Default
    private String message = "정상 처리 되었습니다.";

    @Builder.Default
    private String code = "SUCCESS";

    private T data;

    public String serialize() throws JsonProcessingException {
        ObjectMapper objectMapper = new ObjectMapper();
        return objectMapper.writeValueAsString(this);
    }
}
