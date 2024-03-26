"use client"; // This is a client component 👈🏽
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

interface CustomizedProgressBarsProps {
  valueProgress: number;
  width?: string;
}

export default function CustomizedProgressBars(
  props: CustomizedProgressBarsProps
) {
  const { width = "40px" } = props;
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, width: width, cursor: "pointer" }}>
      <BorderLinearProgress
        theme={theme}
        variant="determinate"
        color="primary"
        value={props.valueProgress}
      />
    </Box>
  );
}
