import { IconButton } from "@mui/material";
import style from "./track.module.scss";
import { PlayArrowRounded, Pause } from "@mui/icons-material";
import secondsToMMSS from "../../utils/secondsToMMSS";
import { useContext } from "react";
import { AudioContext } from "../../context/AudioContext";
import cn from "classnames";

const Track = (track) => {
  const { id, src, preview, title, artists, duration } = track;

  const formattedDuration = secondsToMMSS(duration);

  const { handleToggleAudio, currentTrack, isPlaying } =
    useContext(AudioContext);

  const isCurrentTrack = currentTrack.id === track.id;

  return (
    <div className={cn(style.track, isCurrentTrack && style.playing)}>
      <IconButton onClick={() => handleToggleAudio(track)}>
        {isCurrentTrack && isPlaying ? <Pause /> : <PlayArrowRounded />}
      </IconButton>
      <img className={style.preview} src={preview} alt={title} />
      <div className={style.credits}>
        <b>{title}</b>
        <p>{artists}</p>
      </div>
      <p>{formattedDuration}</p>
    </div>
  );
};

export default Track;
