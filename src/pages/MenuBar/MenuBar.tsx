import { MichelinMetadataResponse } from "@/services/getMichelinMetadata";
import { FilterAlt } from "@mui/icons-material";
import Sort from "@mui/icons-material/Sort";
import {
  Button,
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  Menu,
} from "@mui/material";

import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import React, { useEffect, useState } from "react";
import { useMenuBar } from "./useMenuBar";

export const MenuBar: React.FC = () => {
  const [menuBar, setMenuBar] = useState<MichelinMetadataResponse>([
    null,
  ] as MichelinMetadataResponse);

  const { getSortData } = useMenuBar();

  useEffect(() => {
    const fetchSortData = async () => {
      const data = await getSortData("michelin_award_sort");
      if (data) {
        setMenuBar(data);
      }
    };

    fetchSortData().catch(console.error);
  }, []);

  const handleFilterClick = () => {
    console.log("Filter click handled");
  };
  const handleSortClick = () => {
    console.log(menuBar);
  };

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
    <div className="menu bg-gray-100 flex justify-end">
      <div className="menu__filter m-2">
        <Button
          variant="outlined"
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <FilterAlt onClick={handleFilterClick}></FilterAlt>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <List component="nav" aria-labelledby="nested-list-subheader">
            <ListItemButton onClick={handleListClick} dense={true}>
              <ListItemText primary="One" />
              <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
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
              <ListItemText primary="Three" />
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
      <div className="menu__sort m-2 ">
        <Button variant="outlined">
          <Sort onClick={handleSortClick}></Sort>
        </Button>
      </div>
    </div>
  );
};
