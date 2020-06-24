const detailedIssueUrl = process.env.REACT_APP_DB_HOST_ISSUES;

export const initialState = {
  issue: null,
  commentInfo: null,
  labelInfo: null,
  milestoneInfo: null,
  users: null,
};

export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_ERROR = "FETCH_ERROR";

export const fetchSuccess = (payload) => {
  return { type: FETCH_SUCCESS, payload };
};

export const fetchError = () => {
  return { type: FETCH_ERROR };
};

export const detailedIssueReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_SUCCESS:
      return { ...state, ...payload };
    case FETCH_ERROR:
      return { ...state };
    default:
      return state;
  }
};

export const initDataFetchOptions = ({ detailedIssueDispatch, id }) => ({
  url: detailedIssueUrl + id,
  dispatch: detailedIssueDispatch,
  actionType: {
    fetchSuccess,
    fetchError,
  },
  option: {
    method: "GET",
  },
});

export const editTitleFetchOptions = ({ detailedIssueDispatch, id, title }) => ({
  url: `${detailedIssueUrl}${id}/title`,
  dispatch: detailedIssueDispatch,
  actionType: {
    fetchSuccess,
    fetchError,
  },
  skip: true,
  option: {
    headers: {
      "Content-Type": "application/json",
    },
    method: "PATCH",
    body: JSON.stringify({
      userId: id,
      issueTitle: title,
    }),
  },
});
