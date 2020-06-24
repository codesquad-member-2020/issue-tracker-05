package com.codesquad.issuetracker.hamill.controller;

import com.codesquad.issuetracker.hamill.dto.request.NewIssueDto;
import com.codesquad.issuetracker.hamill.dto.request.UpdateTitleDto;
import com.codesquad.issuetracker.hamill.dto.response.ApiResponse;
import com.codesquad.issuetracker.hamill.dto.response.IssueDto;
import com.codesquad.issuetracker.hamill.dto.response.ListOfIssuesDto;
import com.codesquad.issuetracker.hamill.service.IssueService_Hamill;
import com.codesquad.issuetracker.hamill.service.UserService_Hamill;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.naming.AuthenticationException;

@RestController
@RequestMapping("/hamill/api/issues")
public class IssueController_Hamill {

    private static final Logger logger = LoggerFactory.getLogger(IssueController_Hamill.class);

    private IssueService_Hamill issueService_Hamill;

    public IssueController_Hamill(IssueService_Hamill issueService_Hamill) {
        this.issueService_Hamill = issueService_Hamill;
    }

    @GetMapping("")
    public ResponseEntity<ApiResponse<ListOfIssuesDto>> showIssues() {
        return new ResponseEntity<>(ApiResponse.OK(issueService_Hamill.getIssuesAndAllElements()), HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<ApiResponse<?>> create(@RequestBody NewIssueDto newIssueDto) {
        issueService_Hamill.save(newIssueDto);
        return new ResponseEntity<>(ApiResponse.OK("SUCCESS"), HttpStatus.OK);
    }

    @GetMapping("/{issueId}")
    public ResponseEntity<ApiResponse<IssueDto>> showIssue(@PathVariable Long issueId) {
        return new ResponseEntity<>(ApiResponse.OK(issueService_Hamill.getIssueAndAllElements(issueId)), HttpStatus.OK);
    }

    @PatchMapping("{issueId}/title")
    public ResponseEntity<ApiResponse<?>> updateTitle(@PathVariable Long issueId, @RequestBody UpdateTitleDto updateTitleDto) throws AuthenticationException {
        issueService_Hamill.updateTitle(issueId, updateTitleDto);
        return new ResponseEntity<>(ApiResponse.OK("SUCCESS"), HttpStatus.OK);
    }
 }
