import { BasicSelectData } from "@/constants/forms";
import {
  getMichelinDataResponse,
  MichelinDataRequest,
  MichelinDataResponse,
  SortOrder,
} from "@/services/getMichelinData";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";
import { IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

export default function DropdownSelectionWithButton(props: {
  sortMichelinPage: CallableFunction;
  data: BasicSelectData;
}) {
  const [dropdownSelection, setDropdownSelection] = React.useState(
    "michelin_award_sort"
  );
  const handleDropdownChange = (event: SelectChangeEvent) => {
    setDropdownSelection(event.target.value as string);
  };

  const [buttonSelection, setButtonSelection] = React.useState(
    SortOrder.DESCENDING
  );

  const sortMichelinPage = (
    sortValue: string | number | null,
    sortOrder: SortOrder
  ) => {
    props.sortMichelinPage({
      filter: {},
      sort: [
        [sortValue, sortOrder],
        ["michelin_award_sort", -1],
      ],
      limit: 0,
    });
  };

  const handleButtonChange = (event: React.MouseEvent) => {
    buttonSelection === SortOrder.DESCENDING
      ? setButtonSelection(SortOrder.ASCENDING)
      : setButtonSelection(SortOrder.DESCENDING);
    sortMichelinPage(dropdownSelection, buttonSelection);
  };

  return (
    <div className="w-full flex">
      <FormControl>
        <InputLabel id="demo-simple-select-label">
          {props.data.inputLabel}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={dropdownSelection}
          label="Age"
          onChange={handleDropdownChange}
        >
          {props.data.menuItem.map((data, index) => {
            return (
              <MenuItem
                onClick={() => sortMichelinPage(data.value, buttonSelection)}
                key={index}
                value={data.value ? data.value : "No award"}
              >
                {data.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
      <IconButton
        color="primary"
        onClick={(event) => handleButtonChange(event)}
      >
        <VerticalAlignTopIcon
          className={
            buttonSelection === SortOrder.ASCENDING ? "rotate-180" : ""
          }
        ></VerticalAlignTopIcon>
      </IconButton>
    </div>
  );
}
