"use client"; // This is a client component 👈🏽

import styled from "@emotion/styled";
import { Box, LinearProgress, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import CustomTypography from "../CustomTypography/CustomTypography";
import { useTranslation } from "@clientify/hooks/useTranslation";

const ContainerInfo = styled(Box)(({ theme }: any) => ({
  width: "100%",
  minHeight: "100vh",
  height: "100%",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  padding: "257px 490px 571px 491px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

interface LoadingProps {}
export default function LoadingDashboard(props: LoadingProps) {
  const theme = useTheme();
  const router = useRouter();
  const { t } = useTranslation();

  useEffect(() => {
    setTimeout(() => {
      //   router.push("/dasboard");
    }, 1000);
  }, []);

  return (
    <ContainerInfo theme={theme}>
      <Box sx={{ width: "100%", position: "absolute", top: 0 }}>
        <LinearProgress
          sx={{ color: theme.palette.info.main }}
          variant="indeterminate"
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "32px",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.5 1C13.0523 1 13.5 1.44772 13.5 2V6C13.5 6.55228 13.0523 7 12.5 7C11.9477 7 11.5 6.55228 11.5 6V2C11.5 1.44772 11.9477 1 12.5 1ZM4.72289 4.22289C5.11342 3.83237 5.74658 3.83237 6.13711 4.22289L8.96711 7.05289C9.35763 7.44342 9.35763 8.07658 8.96711 8.46711C8.57658 8.85763 7.94342 8.85763 7.55289 8.46711L4.72289 5.63711C4.33237 5.24658 4.33237 4.61342 4.72289 4.22289ZM20.2771 4.22289C20.6676 4.61342 20.6676 5.24658 20.2771 5.63711L17.4471 8.46711C17.0566 8.85763 16.4234 8.85763 16.0329 8.46711C15.6424 8.07658 15.6424 7.44342 16.0329 7.05289L18.8629 4.22289C19.2534 3.83237 19.8866 3.83237 20.2771 4.22289ZM1.5 12C1.5 11.4477 1.94772 11 2.5 11H6.5C7.05228 11 7.5 11.4477 7.5 12C7.5 12.5523 7.05228 13 6.5 13H2.5C1.94772 13 1.5 12.5523 1.5 12ZM17.5 12C17.5 11.4477 17.9477 11 18.5 11H22.5C23.0523 11 23.5 11.4477 23.5 12C23.5 12.5523 23.0523 13 22.5 13H18.5C17.9477 13 17.5 12.5523 17.5 12ZM8.96711 15.5329C9.35763 15.9234 9.35763 16.5566 8.96711 16.9471L6.13711 19.7771C5.74658 20.1676 5.11342 20.1676 4.72289 19.7771C4.33237 19.3866 4.33237 18.7534 4.72289 18.3629L7.55289 15.5329C7.94342 15.1424 8.57658 15.1424 8.96711 15.5329ZM16.0329 15.5329C16.4234 15.1424 17.0566 15.1424 17.4471 15.5329L20.2771 18.3629C20.6676 18.7534 20.6676 19.3866 20.2771 19.7771C19.8866 20.1676 19.2534 20.1676 18.8629 19.7771L16.0329 16.9471C15.6424 16.5566 15.6424 15.9234 16.0329 15.5329ZM12.5 17C13.0523 17 13.5 17.4477 13.5 18V22C13.5 22.5523 13.0523 23 12.5 23C11.9477 23 11.5 22.5523 11.5 22V18C11.5 17.4477 11.9477 17 12.5 17Z"
            fill="white"
          >
            <animateTransform
              attributeName="transform"
              attributeType="XML"
              type="rotate"
              from="0 12.5 12"
              to="360 12.5 12"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </svg>

        <CustomTypography
          fontWeight={500}
          fontSize="1.125rem"
          fontStyle="normal"
          lineHeight="1.563rem"
          color="#FFF"
          maxWidth="459px"
          textAlign="left"
        >
          {t("Preparando tu dashboard.")}
        </CustomTypography>
      </Box>
    </ContainerInfo>
  );
}
