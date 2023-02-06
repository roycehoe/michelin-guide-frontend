import {
  ANOTHER_DEFAULT_GET_ALL_MICHELIN_DATA_REQUEST,
  getMichelinDataResponse,
  MichelinAward,
  MichelinDataRequest,
  MichelinDataResponse,
} from "@/services/getMichelinData";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

interface MenuItem {
  name: string;
  value: MichelinAward;
}

export interface BasicSelectData {
  inputLabel: string;
  menuItem: MenuItem[];
}

const PLACEHOLDER_DATA: BasicSelectData = {
  inputLabel: "Michelin Rating",
  menuItem: [
    {
      name: "One star",
      value: "ONE_STAR",
    },
    {
      name: "Two stars",
      value: "TWO_STARS",
    },
    {
      name: "Three stars",
      value: "THREE_STARS",
    },
    {
      name: "Bib Gourmand",
      value: "BIB_GOURMAND",
    },
    {
      name: "No award",
      value: null,
    },
  ],
};

export default function BasicSelect(props: {
  setRestaurant: CallableFunction;
}) {
  const [selection, setSelection] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelection(event.target.value as string);
  };

  async function SortMichelinPage(filterRequest: MichelinDataRequest) {
    const response = await getMichelinDataResponse(filterRequest);
    console.log("I am clicked");
    props.setRestaurant(response as MichelinDataResponse[]);
  }

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {PLACEHOLDER_DATA.inputLabel}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selection}
          label="Age"
          onChange={handleChange}
        >
          {PLACEHOLDER_DATA.menuItem.map((data, index) => {
            return (
              <MenuItem
                onClick={() =>
                  SortMichelinPage({
                    filter: { michelin_award: data.value },
                    sort: [["michelin_award_sort", -1]],
                    limit: 0,
                  })
                }
                key={index}
                value={data.value ? data.value : "No award"}
              >
                {data.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
