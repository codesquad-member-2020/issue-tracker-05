import React from "react";

import MenuList from "./MenuList";

import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import Popover from "@material-ui/core/Popover";
import PopupState, { bindTrigger, bindPopover } from "material-ui-popup-state";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { makeStyles } from "@material-ui/core/styles";

const mockArr = ["Filter lssues", "Open issues", "Close issues"];

const Menu = () => {
  const menuList = mockArr.map((text) => <MenuList text={text} />);

  return (
    <>
      <PopoverPopupState menuList={menuList} />
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  button: {
    border: "var(--button-border)",
  },
  filterText: {
    fontSize: "13px",
    fontWeight: "bold",
  },
  downIcon: {
    verticalAlign: "middle",
  },
  popupBox: {
    width: "250px",
    padding: "8px 16px",
    cursor: "pointer",
    borderTop: "1px solid #e1e4e8",
    "&:hover": {
      backgroundColor: "var(--popup-backgroundColor)",
    },

    popupTitle: {
      fontWeight: "bold",
    },
  },
}));

function PopoverPopupState({ menuList }) {
  console.log(menuList);
  const classes = useStyles();

  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Button
            className={classes.button}
            variant="contained"
            color="default"
            size="small"
            {...bindTrigger(popupState)}
          >
            <span className={classes.filterText}>
              Filters
              <ArrowDropDownIcon className={classes.downIcon} />
            </span>
          </Button>
          <Popover
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            {menuList}
            {/* <Box p={1} className={classes.popupBox}>
              <Typography style={{ fontSize: "13px" }}>Filter lssues</Typography>
            </Box>
            <Box p={1} className={classes.popupBox}>
              <Typography style={{ fontSize: "13px" }}>Open issues</Typography>
            </Box> */}
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

export default Menu;