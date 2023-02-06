import { BasicSelectData } from "@/constants/forms";
import {
  getMichelinDataResponse,
  MichelinDataRequest,
  MichelinDataResponse,
} from "@/services/getMichelinData";
import Box from "@mui/material/Box";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import * as React from "react";

export default function BasicSelect(props: {
  sortMichelinPage: CallableFunction;
  data: BasicSelectData;
}) {
  const [selection, setSelection] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSelection(event.target.value as string);
  };

  return (
    <FormControl className="w-full">
      <InputLabel id="demo-simple-select-label">
        {props.data.inputLabel}
      </InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selection}
        label="Age"
        onChange={handleChange}
      >
        {props.data.menuItem.map((data, index) => {
          return (
            <MenuItem
              onClick={() =>
                props.sortMichelinPage({
                  filter: { [props.data.param]: data.value },
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
  );
}
