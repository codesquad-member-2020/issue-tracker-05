import React from "react";

import { data } from "@Mock/detailedIssue";

import Table from "./Table";
import CustomTable from "@Components/common/CustomTable";
import ToolBar from "./ToolBar/ToolBar";
import CustomAvatar from "@Components/Common/CustomAvatar";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const Comment = () => {
  const { comments } = data.issue.commentInfo;

  const classes = useStyles();

  const tableRender = (userName, userId, description, createdAt) => {
    return (
      <CustomTable
        headContents={<ToolBar userName={userName} createdAt={createdAt} />}
        bodyContents={[{ id: userId, contents: description }]}
        className={classes.table}
      />
    );
  };

  return (
    <>
      {comments.map((comment) => {
        const { userId, userName, avatarUrl, createdAt, description } = comment;

        const commentTable = (
          <Box position="relative" mb={4} key={userId}>
            <CustomAvatar id={userName} url={avatarUrl} className={classes.avatar} tooltip />
            <Box ml={"40px"} width="70%">
              {tableRender(userName, userId, description, createdAt)}
            </Box>
          </Box>
        );

        return commentTable;
      })}
    </>
  );
};

const useStyles = makeStyles(() => ({
  table: {
    marginBottom: 40,
    "& th": {
      padding: "3px 20px",
    },
    "& .MuiTableRow-hover": {
      pointerEvents: "none",
    },
  },
  avatar: {
    position: "absolute",
    top: 3,
    left: -5,
  },
}));

export default Comment;
