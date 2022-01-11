import { useNavigate } from "react-router";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function AddPlayer() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [about, setAbout] = useState("");
  const [image, setImage] = useState("");
  const [born, setBorn] = useState("");
  const [batstyle, setBatStyle] = useState("");
  const [bowlingstyle, setBowlingStyle] = useState("");
  const [matches, setMatches] = useState("");
  const [runs, setRuns] = useState("");
  const [wickets, setWickets] = useState("");
  const [hs, setHs] = useState("");
  const [hw, setHw] = useState("");

  const navigate = useNavigate();
  const addPlayer = () => {
    const newPlayer = {
      name,
      role,
      batstyle,
      about,
      image,
      born,
      matches,
      runs,
      wickets,
      bowlingstyle,
      hs,
      hw,
    };

    fetch("https://61c55338c003e70017b7965d.mockapi.io/csk", {
      method: "POST",
      body: JSON.stringify(newPlayer),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then(() => navigate("/squad"));
  };
  return (
    <div className="add-player">
      <TextField
        label="Enter a Name"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        label="Enter Role"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={role}
        onChange={(event) => setRole(event.target.value)}
      />
      <TextField
        label="Enter About"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={about}
        onChange={(event) => setAbout(event.target.value)}
      />
      <TextField
        label="Enter Image URL"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={image}
        onChange={(event) => setImage(event.target.value)}
      />
      <TextField
        label="Enter Born Date"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={born}
        onChange={(event) => setBorn(event.target.value)}
      />
      <TextField
        label="Enter BatStyle"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={batstyle}
        onChange={(event) => setBatStyle(event.target.value)}
      />
      <TextField
        label="Enter BowlStyle"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={bowlingstyle}
        onChange={(event) => setBowlingStyle(event.target.value)}
      />
      <TextField
        label="Enter Matches"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={matches}
        onChange={(event) => setMatches(event.target.value)}
      />
      <TextField
        label="Enter Scored Runs"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={runs}
        onChange={(event) => setRuns(event.target.value)}
      />
      <TextField
        label="Enter Taken Wickets"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={wickets}
        onChange={(event) => setWickets(event.target.value)}
      />
      <TextField
        label="Enter Highest Score"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px", }}
        value={hs}
        onChange={(event) => setHs(event.target.value)}
      />
      <TextField
        label="Enter Highest Wickets"
        variant="standard"
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
        value={hw}
        onChange={(event) => setHw(event.target.value)}
      />
      <br />
      <Button onClick={addPlayer} variant="contained" style={{background:"#fddc1d",color:"black"}}>
        Add Player
      </Button>
      <Button
        variant="contained"
        color="warning"
        onClick={() => navigate("/squad")}
      >
        Back
      </Button>
    </div>
  );
}
