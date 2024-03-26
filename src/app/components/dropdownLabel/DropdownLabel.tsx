"use client"; // This is a client component 👈🏽
import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Box, FormControl } from "@mui/material";
import CustomTypography from "../CustomTypography/CustomTypography";
import { useTranslation } from "@clientify/hooks/useTranslation";

interface DropdownLabelProps {
  options: any[];
  label: string;
  width?: string;
  selectedValue: string | null;
  onChange: (event: React.ChangeEvent<{}>, value: any) => void;
}

export default function DropdownLabel(props: DropdownLabelProps) {
  const { options, width = "300px", selectedValue, onChange, label } = props;
  const { t } = useTranslation();

  return (
    <FormControl variant="standard" fullWidth>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          alignSelf: "stretch",
        }}
      >
        <CustomTypography
          fontWeight={600}
          fontSize="0.625rem"
          fontStyle="normal"
          lineHeight="0.875rem"
          color="#525252"
          textTransform="uppercase"
        >
          {t(label)}
        </CustomTypography>
      </Box>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={options}
        value={options.find((option) => option.label === selectedValue) || null} // Asegúrate de que el valor no sea undefined
        getOptionLabel={(option) => option.label}
        sx={{ width }}
        renderInput={(params) => (
          <TextField variant="outlined" label="" {...params} />
        )}
        onChange={onChange} // Utiliza la función onChange de las props aquí
      />
    </FormControl>
  );
}
