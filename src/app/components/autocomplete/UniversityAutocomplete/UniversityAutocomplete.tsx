import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";
import { IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// Suponiendo que tienes una lista de universidades
const universities = [
  "Universidad Internacional de la Rioja",
  "Universidad Complutense de Madrid",
  "Universidad de Navarra",
  // ...más universidades
];

export default function UniversityAutocomplete() {
  const [value, setValue] = useState("");

  return (
    <Autocomplete
      freeSolo
      fullWidth
      id="university-autocomplete"
      disableClearable
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      options={universities}
      renderInput={(params) => (
        <TextField
          {...params}
          label=""
          placeholder="Cuál es tu escuela, universidad o institución educativa?"
          InputProps={{
            ...params.InputProps,
            type: "search",
            endAdornment: (
              <React.Fragment>
                {value.length > 0 ? (
                  <IconButton
                    onClick={() => setValue("")}
                    sx={{ paddingRight: "8px", margin: 0 }}
                  >
                    <CloseIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    onClick={() => setValue("")}
                    sx={{ paddingRight: "8px", margin: 0 }}
                  >
                    <SearchIcon />
                  </IconButton>
                )}

                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
