"use client";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import CustomTypography from "../CustomTypography/CustomTypography";

export interface Option {
  title?: string;
  urlIcon?: any;
  description?: string;
  value: string;
}

interface RadioOptionGroupProps {
  options: Option[];
  name: string;
  selectedValue: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  backgroundColor?: string;
}

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }: any) => ({
  display: "flex",
  flexDirection: "row-reverse",
  justifyContent: "space-between",
  alignItems: "center",
  alignSelf: "stretch",
  marginLeft: 0,
  marginRight: 0,
  width: "100%",
  height: "100%",
  padding: "24px",
  borderRadius: "4px",
  border: "1px solid #E0E0E0",
  "& .MuiFormControlLabel-label": {
    color: "var(--inputs-text-icons-filled, #525252)",
    fontFamily: "Poppins",
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: 500,
    lineHeight: "19px",
    marginRight: "1rem",
  },

  "& .MuiRadio-root": {
    color: "transparent",
    display: "flex",
    width: "24px",
    height: "24px",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: "1rem",
    "&:after": {
      content: '""',
      display: "block",
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "18px",
      height: "18px",
      borderRadius: "50%",
      backgroundColor: "#D3D3D3",
      opacity: 0.6,
    },
  },
  "& .Mui-checked": {
    color: theme.palette.primary.main,
    "&:after": {
      display: "none",
    },
  },
}));

const RadioOptionGroup: React.FC<RadioOptionGroupProps> = ({
  options,
  name,
  selectedValue,
  onChange,
  backgroundColor = "transparent",
}) => {
  return (
    <FormControl component="fieldset" sx={{ width: "100%" }}>
      <RadioGroup
        name={name}
        value={selectedValue}
        onChange={onChange}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "16px",
          alignSelf: "stretch",
          width: "100%",
        }}
      >
        {options.map((option, index) => (
          <StyledFormControlLabel
            key={index}
            sx={{ background: backgroundColor }}
            value={option.value}
            control={<Radio />}
            label={
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: "8px",
                  flex: "1 0 0",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    alignSelf: "stretch",
                  }}
                >
                  {option.urlIcon && (
                    <Image
                      src={option.urlIcon as any}
                      alt="My Image"
                      width={15}
                    />
                  )}

                  {option.title}
                </Box>
                <>
                  {option.description && (
                    <CustomTypography
                      fontWeight={400}
                      fontSize="0.75rem"
                      fontStyle="normal"
                      lineHeight="1.063rem"
                      color="#8D8D8D"
                      textAlign="left"
                    >
                      {option.description}
                    </CustomTypography>
                  )}
                </>
              </Box>
            }
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
};

export default RadioOptionGroup;
