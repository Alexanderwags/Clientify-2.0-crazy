"use client"; // This is a client component 👈🏽
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { IconButton, MenuItem, Paper } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

interface CurrencyAutoCompleteProps {}

export default function CurrencyAutoComplete(props: CurrencyAutoCompleteProps) {
  const [selectedCountryCode, setSelectedCountryCode] = useState<any>("");
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

  const handleCountryChange = (event: any, value: any) => {
    // Actualiza el estado con el código del país seleccionado
    setSelectedCountryCode(value?.phone || "");

    console.log("Código del país seleccionado:", value?.phone); // O haz algo más con el código
  };
  const handleInputChange = (event: any, value: any) => {
    console.log("Texto ingresado:", value);
    setSearch(value);
    //const exists = countries.find((c) => c.label === value);

    // Aquí puedes realizar cualquier acción basada en el texto ingresado
    //setSelectedCountryCode(null);
  };

  return (
    <Autocomplete
      id="country-select-demo"
      options={countries}
      disableClearable
      autoHighlight
      sx={{
        width: "100%",
        height: "400px",
        background: "#f4f4f4",
        "& .MuiOutlinedInput-root": {
          paddingRight: "16px!important",
        },
        "& .MuiAutocomplete-option.Mui-focused": {
          backgroundColor: "rgb(232 246 255)",
        },

        "&::-webkit-scrollbar": {
          width: "8px",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "#C6C6C6",
          borderRadius: "8px",
          "&:hover": {
            backgroundColor: "#a6a6a6",
          },
        },
      }}
      getOptionLabel={(option) => option.label}
      onClose={(value: any) => {}}
      onInputChange={handleInputChange} // Captura cuando el usuario escribe
      onChange={handleCountryChange} // Agrega el manejador de eventos aquí
      open={true}
      PaperComponent={({ children }) => (
        <Paper
          sx={{
            width: "100%",

            "& .MuiAutocomplete-listbox": {
              height: "340px",

              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#C6C6C6",
                borderRadius: "8px",
              },
            },
          }}
        >
          {children}
        </Paper>
      )}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 }, width: "100%" }}
          {...props}
          key={`${option.code}-${option.label}`}
        >
          <img
            loading="lazy"
            width="20"
            srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
            src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
            alt=""
          />
          {option.label}
        </Box>
      )}
      renderInput={(params) => {
        return (
          <TextField
            {...params}
            label=""
            placeholder="Buscar"
            variant="outlined"
            autoComplete="new-password"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {value.length > 0 ? (
                    <IconButton
                      onClick={(e: any) => {
                        e.stopPropagation();
                        setValue("");
                      }}
                      sx={{ margin: 0, padding: 0 }}
                    >
                      <CloseIcon />
                    </IconButton>
                  ) : (
                    <IconButton
                      onClick={(e: any) => {
                        e.stopPropagation();
                        setValue("");
                      }}
                      sx={{ margin: 0, padding: 0 }}
                    >
                      <SearchIcon />
                    </IconButton>
                  )}
                </React.Fragment>
              ),
            }}
          />
        );
      }}
    />
  );
}

interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
  currency?: string;
}
// "USD", "EUR", "MXN", "DOP", "CRC", "COP", "BOB", "PYG",
// "CLP", "UYU", "ARS", "PEN", "AUD", "GTQ", "CAD", "GBP"
// From https://bitbucket.org/atlassian/atlaskit-mk-2/raw/4ad0e56649c3e6c973e226b7efaeb28cb240ccb0/packages/core/select/src/data/countries.js
const countries: readonly CountryType[] = [
  {
    code: "US",
    label: "Dólar americano",
    phone: "1",
    suggested: true,
    currency: "USD",
  },
  {
    code: "EU",
    label: "Euro",
    phone: "52",
    suggested: false,
    currency: "EUR",
  },
  {
    code: "MX",
    label: "Pesos Mexicanos",
    phone: "52",
    suggested: false,
    currency: "MXN",
  },
  {
    code: "DO",
    label: "Pesos dominicanos",
    phone: "1-809",
    suggested: false,
    currency: "DOP",
  },
  {
    code: "CR",
    label: "Colones",
    phone: "506",
    suggested: false,
    currency: "CRC",
  },
  {
    code: "CO",
    label: "Pesos colombianos",
    phone: "57",
    suggested: false,
    currency: "COP",
  },
  {
    code: "BO",
    label: "boliviano",
    phone: "591",
    suggested: false,
    currency: "BOB",
  },
  {
    code: "PY",
    label: "Paraguay",
    phone: "595",
    suggested: false,
    currency: "PYG",
  },
  {
    code: "CL",
    label: "Pesos chilenos",
    phone: "56",
    suggested: false,
    currency: "CLP",
  },
  {
    code: "UY",
    label: "Uruguay",
    phone: "598",
    suggested: false,
    currency: "UYU",
  },
  {
    code: "AR",
    label: "Pesos argentinos",
    phone: "54",
    suggested: false,
    currency: "ARS",
  },
  {
    code: "PE",
    label: "Pesos peruanos",
    phone: "51",
    suggested: false,
    currency: "PEN",
  },
  {
    code: "AU",
    label: "Dólar australiano",
    phone: "61",
    suggested: true,
    currency: "AUD",
  },
  {
    code: "GT",
    label: "Guatemala",
    phone: "502",
    suggested: false,
    currency: "GTQ",
  },
  {
    code: "CA",
    label: "Dólar canadiense",
    phone: "1",
    suggested: true,
    currency: "CAD",
  },
  {
    code: "GB",
    label: "Libra esterlina",
    phone: "44",
    suggested: false,
    currency: "GBP",
  },
];
