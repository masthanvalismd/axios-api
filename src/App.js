import "./App.css";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router";
import { NotFound } from "./NotFound";
import { Home } from "./Home";
import { SquadList } from "./SquadList";
import { PlayerDetails } from "./SquadDetails";
import { AddPlayer } from "./AddPlayer";
import { EditDetails } from "./EditDetails";
import { useState } from "react";
import Sound from "react-sound";
import CSK from "./CSK.mp3";
import IconButton from "@mui/material/IconButton";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import StopCircleIcon from "@mui/icons-material/StopCircle";

export default function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <div className="navBar">
        <AppBar postion="static" style={{ background: "blue", color: "black" }}>
          <Toolbar>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/squad");
              }}
            >
              Squad
            </Button>
            <Button
              color="inherit"
              onClick={() => {
                navigate("/addplayer");
              }}
            >
              Add Player
            </Button>
            <PlaySound />
          </Toolbar>
        </AppBar>
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/squad" element={<SquadList />} />
        <Route exact path="/addplayer" element={<AddPlayer />} />
        <Route exact path="/squad/:id" element={<PlayerDetails />} />
        <Route exact path="/player/edit/:id" element={<EditDetails />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

const PlaySound = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying
) => {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div>
      <IconButton
        color="warning"
        title="Theme Song"
        onClick={() => setIsPlaying(!isPlaying)}>
        {!isPlaying ? <PlayCircleIcon /> : <StopCircleIcon />}
      </IconButton>
      <Sound
        url={CSK}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
    </div>
  );
};
