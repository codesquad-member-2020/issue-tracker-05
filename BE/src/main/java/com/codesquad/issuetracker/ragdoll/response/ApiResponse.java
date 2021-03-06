package com.codesquad.issuetracker.ragdoll.response;

public class ApiResponse<T> {

    private boolean status;

    private T response;

    public ApiResponse() {}

    private ApiResponse(boolean status, T response) {
        this.status = status;
        this.response = response;
    }

    public static <T> ApiResponse<T> OK(T response) {
        return new ApiResponse(true, response);
    }
}
