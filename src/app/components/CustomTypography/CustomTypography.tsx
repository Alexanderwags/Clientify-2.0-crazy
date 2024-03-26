import React from "react";
import { Typography } from "@mui/material";

interface CustomTypographyProps {
  fontWeight?: number;
  fontSize?: string;
  children: string;
  fontStyle?: string;
  lineHeight?: string;
  maxWidth?: string;
  color?: string;
  textAlign?: string;
  textTransform?: string;
  type?: keyof TypographyType;
}

interface TypographyType {
  SubheaderRegular: string;
  SubheaderSemiBold: string;
}

const CustomTypography = (props: CustomTypographyProps) => {
  const {
    fontWeight,
    fontSize,
    fontStyle,
    lineHeight,
    maxWidth,
    color = "white",
    textAlign,
    textTransform,
    type = null,
  } = props;

  const newProps: any = {
    fontWeight,
    fontSize,
    fontStyle,
    lineHeight,
    color,
  };

  if (maxWidth) {
    newProps["maxWidth"] = maxWidth;
  }

  if (textAlign) {
    newProps["textAlign"] = textAlign;
  }

  if (textTransform) {
    newProps["textTransform"] = textTransform;
  }

  if (type != null && type === "SubheaderRegular") {
    return (
      <Typography
        fontWeight={400}
        fontSize="1rem"
        fontStyle="normal"
        lineHeight="1.375rem"
        color={props.color}
        maxWidth="100%"
        style={newProps}
      >
        {props.children}
      </Typography>
    );
  } else if (type != null && type === "SubheaderSemiBold") {
    return (
      <Typography
        fontWeight={600}
        fontSize="1rem"
        fontStyle="normal"
        lineHeight="1.375rem"
        color={props.color}
        maxWidth="100%"
        style={newProps}
      >
        {props.children}
      </Typography>
    );
  }

  return <Typography style={newProps}>{props.children}</Typography>;
};

export default CustomTypography;
