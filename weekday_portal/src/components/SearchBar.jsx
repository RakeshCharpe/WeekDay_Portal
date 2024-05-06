import * as React from "react";
import TextField from "@mui/material/TextField";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';

const SearchBar = (props) => {
  const { res } = props;
  
  return (

    <div className="search-bar">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      ></Box>
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Role"
          defaultValue="Select"
          helperText="select roles"
          onChange={(e) => {
            console.log(e.target.value);
          }}
        >
          {res.map((option) => (
            <MenuItem key={option.id} value={option.role}>
              {option.role}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  );
}



export default SearchBar;