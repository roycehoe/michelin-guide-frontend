import { FilterAlt } from "@mui/icons-material";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Menu,
} from "@mui/material";

import React from "react";

export interface NestedMenuItem {
  parent: string;
  child: Array<string | number>;
}

export const NestedMenu: React.FC = (props) => {
  const menuItems = props.data as NestedMenuItem[];
  const icon = props.icon;
  console.log(menuItems);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [openList, setOpenList] = React.useState(true);
  const handleListClick = () => {
    setOpenList(!openList);
  };
  return (
    <div className="menu__filter m-2">
      <Button variant="outlined" onClick={handleClick}>
        <FilterAlt></FilterAlt>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <List component="nav" aria-labelledby="nested-list-subheader">
          <ListItemButton onClick={handleListClick} dense={true}>
            <ListItemText primary="Price" />
          </ListItemButton>
          <Collapse in={openList} timeout="auto" unmountOnExit>
            <List component="div" dense={true} disablePadding={true}>
              <ListItemText className="m-2 ml-8" primary="I am one" />
              <ListItemText className="m-2 ml-8" primary="I am one" />
              <ListItemText className="m-2 ml-8" primary="I am one" />
              <ListItemText className="m-2 ml-8" primary="I am one" />
              <ListItemText className="m-2 ml-8" primary="I am one" />
            </List>
          </Collapse>
          <ListItemButton onClick={handleListClick} dense={true}>
            <ListItemText primary="Stars" />
            <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
          </ListItemButton>
          <Collapse in={openList} timeout="auto" unmountOnExit>
            <List component="div" dense={true} disablePadding={true}>
              <ListItemText className="m-2 ml-8" primary="I am three" />
              <ListItemText className="m-2 ml-8" primary="I am three" />
              <ListItemText className="m-2 ml-8" primary="I am three" />
              <ListItemText className="m-2 ml-8" primary="I am three" />
              <ListItemText className="m-2 ml-8" primary="I am three" />
            </List>
          </Collapse>
        </List>
      </Menu>
    </div>
  );
};
