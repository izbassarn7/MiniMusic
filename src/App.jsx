import MainPage from "./pages/MainPage";
import style from "./global.module.scss";
import Playbar from "./components/Playbar/Playbar";
import { styled, useTheme } from "@mui/material/styles";
import WallPaper from "./components/Wallpaper/Wallpaper";

const App = () => (
  <div className={style.wrapper}>
    <WallPaper />
    <MainPage />
    <Playbar />
  </div>
);

export default App;
