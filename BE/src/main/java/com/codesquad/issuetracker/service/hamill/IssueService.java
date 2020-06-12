package com.codesquad.issuetracker.service.hamill;

import com.codesquad.issuetracker.dao.hamill.IssueDao;
import com.codesquad.issuetracker.dto.hamill.RequestNewIssueDto;
import com.codesquad.issuetracker.dto.hamill.info.IssuesDto;
import com.codesquad.issuetracker.dto.hamill.label.LabelDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class IssueService {

    private static final Logger logger = LoggerFactory.getLogger(IssueService.class);
    private static final int ZERO = 0;

    private IssueDao issueDao;

    public IssueService(IssueDao issueDao) {
        this.issueDao = issueDao;
    }

    public List<IssuesDto> findAllIssues() {

        List<IssuesDto> ListTypeIssuesDto = new ArrayList<>();

        for (int i = ZERO; i < issueDao.getCountOfIssues(); i++) {
            ListTypeIssuesDto.add(i, findIssueByIssueId(i + 1L)); // issue ID는 1부터 시작
        }

        return ListTypeIssuesDto;
    }

    public IssuesDto findIssueByIssueId(Long issueId) {

        IssuesDto issuesDto = issueDao.findIssueByIssueId(issueId);
        issuesDto.setAttachedLabels(issueDao.findLabelsByIssuesId(issueId));
        issuesDto.setAllocatedAssignees(issueDao.findAssigneeByIssueId(issueId));
        return issuesDto;
    }

    public IssuesDto save(RequestNewIssueDto requestNewIssueDto) {
        Long newIssueId = issueDao.getCountOfIssues() + 1L;
        logger.info("#### request1: {}", requestNewIssueDto.getAttachedLabels());
        issueDao.saveNewIssue(
                newIssueId,
                requestNewIssueDto.getTitle(),
                requestNewIssueDto.getUserId(),
                requestNewIssueDto.getMilestone().getMilestoneId());
        logger.info("#### request1: {}", requestNewIssueDto.getAttachedLabels());

        saveNewIssueHasLabel(requestNewIssueDto);

        IssuesDto issuesDto = issueDao.findIssueByIssueId(newIssueId);
        issuesDto.setAttachedLabels(requestNewIssueDto.getAttachedLabels());
        issuesDto.setAllocatedAssignees(requestNewIssueDto.getAllocatedAssignees());

        return issuesDto;
    }

    private void saveNewIssueHasLabel(RequestNewIssueDto requestNewIssueDto) {
        for (int i = ZERO; i < requestNewIssueDto.getAttachedLabels().size(); i++) {
            logger.info("##### num: {}",requestNewIssueDto.getAttachedLabels().size());
            logger.info("##### num: {}",requestNewIssueDto.getAttachedLabels().get(i).getLabelId());
        }


        for (int i = ZERO; i < requestNewIssueDto.getAttachedLabels().size(); i++) {
            issueDao.saveNewIssueHasLabel(requestNewIssueDto.getAttachedLabels().get(i).getLabelId(), (long)issueDao.getCountOfIssues());
        }
    }
}
