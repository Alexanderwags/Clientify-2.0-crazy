"use client"; // This is a client component 👈🏽
import { Box } from "@mui/material";
import React from "react";
import CustomTypography from "../components/CustomTypography/CustomTypography";
import { useTranslation } from "@clientify/hooks/useTranslation";

export default function FooterOnBoarding() {
  const { t } = useTranslation();

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        background: "var(--Surface-Background, #F4F4F4)",
        padding: "25px 16px",
      }}
    >
      <CustomTypography
        fontWeight={400}
        fontSize="0.625rem"
        fontStyle="normal"
        lineHeight="0.875rem"
        color="#8A8A8A"
      >
        {t("©2024 Clientify Todos los derechos reservados.")}
      </CustomTypography>
      <CustomTypography
        fontWeight={400}
        fontSize="0.75rem"
        fontStyle="normal"
        lineHeight="1.063rem"
        color="#C6C6C6"
      >
        {t("Imágenes de Freepik")}
      </CustomTypography>
    </Box>
  );
}
