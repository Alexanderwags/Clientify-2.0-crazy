"use client";
import { Box } from "@mui/material";
import React from "react";
import CustomTypography from "../CustomTypography/CustomTypography";
import { useTranslation } from "@clientify/hooks/useTranslation";
import Image from "next/image";

export interface CardProperties {
  title?: string;
  description?: string;
  image?: any;
}
interface CardImageProps {
  cardInformation: CardProperties;
}

export function CardImage(props: CardImageProps) {
  const { t } = useTranslation();
  const { title, description, image } = props.cardInformation;

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        padding: "8px",
        flexDirection: "column",
        alignItems: "center",
        gap: "11px",
        borderRadius: "var(--Radius-Small, 4px)",
        background: "var(--Surface-Modal, #FFF)",
        "&:hover": {
          backgroundColor: "var(--Hover-Background-Color, #F0F0F0)",
          transition: "0.3s",
        },
      }}
    >
      <Image
        src={image}
        alt="My Image"
        style={{ width: "100%", minHeight: "200.576px", height: "auto" }}
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 1, // 4px, ya que el factor base de MUI es 8px (1 * 8px = 8px)
          alignSelf: "stretch",
        }}
      >
        <CustomTypography
          fontWeight={600}
          fontSize="1rem"
          fontStyle="normal"
          lineHeight="1.375rem"
          color="#525252"
          textAlign="left"
          maxWidth="100%"
        >
          {t(title)}
        </CustomTypography>
        <CustomTypography
          fontWeight={400}
          fontSize="0.75rem"
          fontStyle="normal"
          lineHeight="1.063rem"
          color="#525252"
          textAlign="left"
          maxWidth="100%"
        >
          {t(description)}
        </CustomTypography>
      </Box>
    </Box>
  );
}
