import { MichelinMetadataResponse } from "@/services/getMichelinMetadata";
import { FilterAlt } from "@mui/icons-material";
import Sort from "@mui/icons-material/Sort";
import { Button, Menu, MenuItem } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useMenuBar } from "./useMenuBar";

const FILTER_OPTIONS = [
  "Price", //currency_symbol
  "Cuisine",
  "Michelin award",
];

// const SOMETHING = [
//   { Price: [1, 2, 3, 4, 5] },
//   { Cuisine: ["wee"] },
//   { "Michelin award": ["very good", "dogshit"] },
// ];
const SOMETHING = {
  Price: [1, 2, 3, 4, 5],
  Cuisine: ["wee"],
  "Michelin award": ["very good", "dogshit"],
};

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
          {Object.keys(SOMETHING).map((option) => (
            <MenuItem>{option}</MenuItem>
          ))}
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
