import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Menu,
} from "@mui/material";

import React, { ReactNode } from "react";

export interface NestedMenuItem {
  parent: string;
  child: Array<string | number>;
}

interface NestedMenuProps {
  data: NestedMenuItem[];
  icon: ReactNode;
}

export const NestedMenu: React.FC<NestedMenuProps> = ({
  data: menuItems,
  icon,
}: NestedMenuProps) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isOpened = Boolean(anchorEl);

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
        {/* <FilterAlt></FilterAlt> */}
        {icon}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={isOpened}
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
