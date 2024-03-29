import React from "react";
import styled from "@mui/material/styles/styled";

const WallPaper = styled("div")({
  zIndex: -1,
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  background:
    "linear-gradient(to right, rgb(122, 108, 161) 0%, rgb(150, 116, 186) 10%, rgb(183, 123, 197) 30%, rgb(275, 229, 247) 100%)",
  transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
  "&::before": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    top: "-40%",
    right: "-50%",
    background:
      "radial-gradient(at center center, rgb(95, 95, 166) 0%, rgba(40, 40, 110, 0) 44%)",
  },
  "&::after": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    bottom: "-50%",
    left: "30%",
    background:
      "radial-gradient(at center center, rgb(250, 240, 230) 0%, rgba(250, 240, 230, 0) 70%)",
    transform: "rotate(30deg)",
  },
});

export default WallPaper;
