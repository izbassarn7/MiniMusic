import MainPage from "./pages/MainPage";
import style from "./global.module.scss";
import Playbar from "./components/Playbar/Playbar";
import { styled, useTheme } from "@mui/material/styles";

const WallPaper = styled("div")({
  zIndex: -1,
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  overflow: "hidden",
  background:
    "linear-gradient(to right, rgb(97, 80, 143) 0%, rgb(127, 87, 169) 10%, rgb(183, 123, 197) 30%, rgb(275, 229, 247) 100%)", // Brighter colors
  transition: "all 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275) 0s",
  "&::before": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    top: "-40%",
    right: "-50%",
    background:
      "radial-gradient(at center center, rgb(40, 40, 110) 0%, rgba(40, 40, 110, 0) 44%)", // Slightly lighter radial gradient
  },
  "&::after": {
    content: '""',
    width: "140%",
    height: "140%",
    position: "absolute",
    bottom: "-50%",
    left: "30%",
    background:
      "radial-gradient(at center center, rgb(250, 240, 230) 0%, rgba(250, 240, 230, 0) 70%)", // Slightly lighter radial gradient
    transform: "rotate(30deg)",
  },
});

const App = () => (
  <div className={style.wrapper}>
    <WallPaper />
    <MainPage />
    <Playbar />
  </div>
);

export default App;
