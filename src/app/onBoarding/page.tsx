"use client"; // This is a client component 👈🏽
import React from "react";
import { UserOnboarding } from "./UserOnboarding";
import { Box } from "@mui/material";

export default function Onboarding() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        background: "var(--Surface-Background, #F4F4F4)",
      }}
    >
      <UserOnboarding />
    </Box>
  );
}
