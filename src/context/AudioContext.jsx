import { createContext, useState } from "react";
import tracksList from "../assets/tracksList";
import { PropTypes } from "prop-types";

const audio = new Audio();

export const AudioContext = createContext({});

const AudioProvider = ({ children }) => {
  AudioProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  const [currentTrack, setCurrentTrack] = useState(tracksList[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggleAudio = (track) => {
    if (currentTrack.id !== track.id) {
      setCurrentTrack(track);
      setIsPlaying(true);

      audio.src = track.src;
      audio.currentTime = 0;

      audio.oncanplaythrough = () => {
        audio.play();
      };

      return;
    }

    if (!isPlaying) {
      setIsPlaying(true);
      audio.play();
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const value = {
    audio,
    currentTrack,
    isPlaying,
    handleToggleAudio,
  };
  return (
    <AudioContext.Provider value={value}>{children}</AudioContext.Provider>
  );
};

export default AudioProvider;
