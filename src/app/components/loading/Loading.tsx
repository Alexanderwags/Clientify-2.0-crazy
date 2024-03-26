"use client"; // This is a client component 👈🏽

import styled from "@emotion/styled";
import { Box, LinearProgress, useTheme } from "@mui/material";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ContainerInfo = styled(Box)(({ theme }: any) => ({
  width: "100%",
  minHeight: "100vh",
  height: "100%",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  padding:
    "56px var(--Spacing-XLarge, 32px) var(--Spacing-XLarge, 32px) var(--Spacing-XLarge, 32px)",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

interface LoadingProps {}
export default function Loading(props: LoadingProps) {
  const theme = useTheme();
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/freeTrial");
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

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="99"
        height="99"
        viewBox="0 0 99 99"
        fill="none"
      >
        <path
          d="M44.7136 0.476223C48.9256 0.878177 55.6503 2.3568 62.7818 4.16082V25.919C58.1201 25.1534 54.1953 24.5792 52.2519 24.4165C44.9433 23.8087 28.8995 29.68 29.5123 49.5003C30.1249 69.3206 46.968 73.3208 49.4951 73.3208C50.3805 73.3208 55.9231 72.6413 62.8058 71.7465V93.8252C58.9434 94.9451 55.1479 96.1126 51.6299 97.2707C34.5905 102.96 7.18412 91.3801 5.59985 49.9884C4.01558 8.59663 31.9341 -0.739211 44.7136 0.476223Z"
          fill="white"
        />
        <path
          d="M93.4284 12.8495V31.3155C93.4284 31.3155 81.2185 29.0521 69.875 27.1094V6.05457C82.0896 9.31803 93.4284 12.8495 93.4284 12.8495Z"
          fill="white"
        />
        <path
          d="M69.875 70.8173C81.3862 69.291 93.4284 67.6449 93.4284 67.6449V85.9099C93.4284 85.9099 82.3241 88.446 69.875 91.8482V70.8173Z"
          fill="white"
        />
      </svg>
    </ContainerInfo>
  );
}
