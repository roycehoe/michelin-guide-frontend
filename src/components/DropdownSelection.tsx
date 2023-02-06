import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

interface MenuItem {
  name: string;
  value: string | number;
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
      value: 10,
    },
    {
      name: "Two stars",
      value: 20,
    },
    {
      name: "Three stars",
      value: 30,
    },
  ],
};

export default function BasicSelect() {
  const [selection, setSelection] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelection(event.target.value as string);
  };

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
              <MenuItem key={index} value={data.value}>
                {data.name}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
