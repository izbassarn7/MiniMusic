import { useContext, useState, useEffect } from "react";
import { AudioContext } from "../../context/AudioContext";
import style from "./playbar.module.scss";
import {
  PlayArrowRounded,
  PauseRounded,
  VolumeUpRounded,
  VolumeOffRounded,
  VolumeDownRounded,
  VolumeMuteRounded,
} from "@mui/icons-material";
import { Slider, IconButton } from "@mui/material";
import secondsToMMSS from "../../utils/secondsToMMSS";

const TimeControls = () => {
  const { audio, currentTrack } = useContext(AudioContext);

  const { duration } = currentTrack;

  const [currentTime, setCurrentTime] = useState(0);

  const formattedCurrentTime = secondsToMMSS(currentTime);

  const sliderCurrentTime = Math.round((currentTime / duration) * 200);

  const [isVolumePopupOpen, setIsVolumePopupOpen] = useState(false);

  const toggleVolumePopup = () => {
    setIsVolumePopupOpen(!isVolumePopupOpen);
  };

  const handleChangeCurrentTime = (_, value) => {
    const time = Math.round((value * duration) / 200);

    setCurrentTime((prevTime) => 0.8 * prevTime + 0.2 * time); // Interpolate for smoother transition
    audio.currentTime = time;
  };

  useEffect(() => {
    const timeInterval = setInterval(() => {
      setCurrentTime(audio.currentTime);
    }, 200);

    return () => clearInterval(timeInterval);
  }, [audio.currentTime]);

  return (
    <>
      <p>{formattedCurrentTime}</p>
      <Slider
        step={2}
        min={0}
        max={200}
        value={sliderCurrentTime}
        onChange={handleChangeCurrentTime}
      />
    </>
  );
};

const Playbar = () => {
  const { audio, currentTrack, handleToggleAudio, isPlaying } =
    useContext(AudioContext);
  const { title, artists, preview, duration } = currentTrack;

  const formattedDuration = secondsToMMSS(duration);

  const [volume, setVolume] = useState(50);
  const handleChangeVolume = (event) => {
    const newVolume = event.target.value;
    setVolume(newVolume);
    audio.volume = newVolume / 100; // Update audio element volume
  };

  const volumeIcon = () => {
    if (volume === 0) return <VolumeOffRounded />;
    else if (volume < 20) return <VolumeMuteRounded />;
    else if (volume < 66) return <VolumeDownRounded />;
    else if (volume > 66) return <VolumeUpRounded />;
    else return <VolumeUpRounded small />; // small variation for mid-range
  };

  return (
    <div className={style.playbar}>
      <div className={style.info}>
        <img className={style.preview} src={preview} alt={title} />
        <div className={style.controls}>
          <IconButton onClick={() => handleToggleAudio(currentTrack)}>
            {isPlaying ? <PauseRounded /> : <PlayArrowRounded />}
          </IconButton>
        </div>
        <div className={style.credits}>
          <h4>{title}</h4>
          <p>{artists}</p>
        </div>
      </div>

      <div className={style.slider}>
        <TimeControls />
        <p>{formattedDuration}</p>
      </div>
      <div className={style.volume}>
        {volumeIcon()}
        <Slider
          step={1}
          min={0}
          max={100}
          value={volume}
          onChange={handleChangeVolume}
        />
      </div>
    </div>
  );
};
export default Playbar;
