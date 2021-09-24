import * as React from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function LimitTags() {
  return (
    <Autocomplete
      multiple
      limitTags={2}
      id="multiple-limit-tags"
      options={top100Films}
      getOptionLabel={(option) => option.title}
      defaultValue={[top100Films[13], top100Films[12], top100Films[11]]}
      renderInput={(params) => (
        <TextField {...params} label="Your Genre" placeholder="Favorites" />
      )}
    />
  );
}
