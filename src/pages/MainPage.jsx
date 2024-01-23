import { Input } from "@mui/material";
import tracksList from "../assets/tracksList";
import Track from "../components/Track/Track";
import style from "./mainPage.module.scss";
import { useState } from "react";

const runSearch = (searchQuery) => {
  if (!searchQuery) {
    return tracksList;
  }

  const searchQueryLowerCase = searchQuery.toLowerCase();

  return tracksList.filter(
    (track) =>
      track.title.toLowerCase().includes(searchQueryLowerCase) ||
      track.artists.toLowerCase().includes(searchQueryLowerCase)
  );
};

const MainPage = () => {
  const [tracks, setTracks] = useState(tracksList);
  const handleChange = (event) => {
    const foundTracks = runSearch(event.target.value);
    setTracks(foundTracks);
  };

  return (
    <div className={style.search}>
      <div className={style["input-container"]}>
        <Input
          className={style.input}
          placeholder="Search"
          onChange={handleChange}
        />
      </div>
      <div className={style.list}>
        {tracks.map((track) => (
          <Track key={track.id} {...track} />
        ))}
      </div>
    </div>
  );
};

export default MainPage;
