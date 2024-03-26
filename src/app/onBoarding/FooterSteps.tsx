"use client"; // This is a client component 👈🏽
import styled from "@emotion/styled";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";
import CustomTypography from "../components/CustomTypography/CustomTypography";
import { useTranslation } from "@clientify/hooks/useTranslation";

const SubmitButton = styled(Button)(({ theme }: any) => ({
  margin: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textTransform: "none",
  height: "35px",
}));

interface FooterStepsProps {
  selectedValue?: string | null;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function FooterSteps(props: FooterStepsProps) {
  const { t } = useTranslation();
  const { onChange } = props;
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        padding: "var(--Spacing-Large, 24px)",
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "32px",
        background: "var(--Surface-Modal, #FFF)",
      }}
    >
      <Box sx={{ width: "175px" }}>
        <SubmitButton
          fullWidth
          variant="contained"
          color="primary"
          onClick={onChange}
        >
          <CustomTypography
            fontWeight={500}
            fontSize="0.875rem"
            fontStyle="normal"
            lineHeight="1.188rem"
            textTransform="none"
          >
            {t("Siguiente")}
          </CustomTypography>
        </SubmitButton>
      </Box>
    </Box>
  );
}
