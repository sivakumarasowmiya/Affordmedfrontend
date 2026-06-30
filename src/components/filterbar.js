import React from "react";
import {
  Select,
  MenuItem
} from "@mui/material";

function FilterBar({ setType }) {

  return (
    <Select
      defaultValue=""
      onChange={(e) =>
        setType(e.target.value)
      }
    >

      <MenuItem value="">
        All
      </MenuItem> la 

      <MenuItem value="Placement">
        Placement
      </MenuItem>

      <MenuItem value="Result">
        Result
      </MenuItem>

      <MenuItem value="Event">
        Event
      </MenuItem>

    </Select>
  );
}

export default FilterBar;