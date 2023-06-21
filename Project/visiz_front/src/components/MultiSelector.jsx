import React from "react";
import { TextField, Autocomplete } from "@mui/material";
import { tokens } from "../theme";
import { useTheme } from "@mui/material";

export default function MultiSelector({
  name,
  selections,
  setSelection,
  title,
}) {
  const theme = useTheme();
  const color = tokens(theme.palette.mode);

  console.log(
    "name",
    name,
    typeof JSON.parse(localStorage.getItem(name)),
    JSON.parse(localStorage.getItem(name))
  );
  const v = JSON.parse(localStorage.getItem(name)) || [];
  const [value, setValue] = React.useState(Object.values(v) || []);

  return (
    <Autocomplete
      sx={{
        m: 1,
        width: 500,
        span: { color: color.grey[100] },
      }}
      value={value}
      onChange={(event, newValue) => {
        setSelection(newValue);
        setValue(newValue);
      }}
      multiple
      options={selections}
      getOptionLabel={(option) => option}
      disableCloseOnSelect
      renderInput={(params) => (
        <TextField
          {...params}
          sx={{ input: { color: color.grey[100] } }}
          variant="outlined"
          label={title}
          placeholder={title}
        />
      )}
    />
  );
}
