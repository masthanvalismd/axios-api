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
