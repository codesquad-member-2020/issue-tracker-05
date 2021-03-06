import React from "react";

import Box from "@material-ui/core/Box";

import Label from "@Components/common/Label";
import Title from "./Title";
import Details from "./Details";

const Contents = () => {
  return (
    <>
      <Box display="flex" flexDirection="column" marginLeft={2}>
        <Box display="flex" alignItems="center">
          <Title title="[FE] 개발환경 구축하기" />
          <Label name="레이블 내용" backgroundColor="#000" color="#FFF" />
        </Box>
        <Details id={18} time="2020-06-19 13:00:00" author="sungik-choi" />
      </Box>
    </>
  );
};

export default Contents;
