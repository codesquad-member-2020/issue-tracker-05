import React, { useState } from "react";

import Box from "@material-ui/core/Box";

import CustomButton from "@Components/common/CustomButton";
import LinkButtons from "@Components/common/LinkButtons/LinkButtons";
import NewLabel from "./NewLabel/NewLabel";

const Navigation = () => {
  const [showNewLabel, setShowNewLabel] = useState(false);

  const NEW_LABEL_BTN_TEXT = "New Label";

  return (
    <>
      <Box
        component="nav"
        mt={14}
        mb={2}
        maxHeight={38}
        display="flex"
        justifyContent="space-between"
      >
        <LinkButtons activeButton="labels" />
        <CustomButton
          text={NEW_LABEL_BTN_TEXT}
          clickHandler={() => setShowNewLabel(!showNewLabel)}
        />
      </Box>
      {showNewLabel && <NewLabel />}
    </>
  );
};

export default Navigation;
