"use client"; // This is a client component 👈🏽
import { Box } from "@mui/material";
import React from "react";
import CustomTypography from "../components/CustomTypography/CustomTypography";
import { useTranslation } from "@clientify/hooks/useTranslation";
import CustomizedProgressBars from "../components/CustomizedProgressBars/CustomizedProgressBars";

interface HeaderOnBoardingProps {
  step?: number | null;
  next?: number | null;
}

export default function HeaderOnBoarding(props: HeaderOnBoardingProps) {
  const { step = 0, next = 0 } = props;
  const { t } = useTranslation();

  const checkStep = () => {
    return step === 1 ? 3 : 2;
  };

  const info = () => {
    if (next === 1 && checkStep() === 3) {
      return t(`Vamos, ¡estamos cerca!`);
    }

    if (next === 0 && checkStep() === 2) {
      return t(`¡Estás a 2 pasos!`);
    }

    return checkStep() === 3 && next != 2
      ? t(`¡Estás a 3 pasos!`)
      : t(`¡Ya casi estas!`);
  };

  return (
    <Box
      sx={{
        display: "flex",
        width: "100%", // Ancho específico
        padding: "var(--Spacing-Medium, 16px) var(--Spacing-Large, 24px)", // Padding con variables CSS y valores de respaldo
        justifyContent: "space-between", // Distribuye el espacio entre los elementos
        alignItems: "center", // Centra los elementos verticalmente
        background: "var(--Surface-Modal, #FFF)", // Color de fondo con variable CSS y valor de respaldo
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
          }}
        >
          <CustomTypography color="#262626" type="SubheaderSemiBold">
            {t("👋 Hola Alyssa,")}
          </CustomTypography>
          <CustomTypography color="#262626" type="SubheaderRegular">
            {t(
              "vamos a conocernos mejor para que utilices Clientify a plena potencia."
            )}
          </CustomTypography>
        </Box>

        {step && step > 0 && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "8px",
              alignSelf: "stretch",
            }}
          >
            <CustomTypography
              fontWeight={400}
              fontSize="0.75rem"
              fontStyle="normal"
              lineHeight="1.063rem"
              color="#8D8D8D"
              maxWidth="100%"
            >
              {info()}
            </CustomTypography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <CustomizedProgressBars width="64px" valueProgress={100} />
              <CustomizedProgressBars
                width="64px"
                valueProgress={next && next >= 1 ? 100 : 0}
              />
              {checkStep() === 3 && (
                <CustomizedProgressBars
                  width="64px"
                  valueProgress={next && next >= 2 ? 100 : 0}
                />
              )}
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
}
