import { useNavigate, useParams } from "react-router";
import { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export function EditDetails() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  const getSquad = () => {
    fetch(`https://61c55338c003e70017b7965d.mockapi.io/csk/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((sqd) => setPlayer(sqd));
  };
  useEffect(getSquad, [id]);
  return player ? <UpdatedDetails player={player} /> : "";
}

function UpdatedDetails({ player }) {
  console.log(player);
  const [name, setName] = useState(player.name);
  const [role, setRole] = useState(player.role);
  const [about, setAbout] = useState(player.about);
  const [image, setImage] = useState(player.image);
  const [born, setBorn] = useState(player.born);
  const [batstyle, setBatStyle] = useState(player.batstyle);
  const [bowlingstyle, setBowlingStyle] = useState(player.bowlingstyle);
  const [matches, setMatches] = useState(player.matches);
  const [runs, setRuns] = useState(player.runs);
  const [wickets, setWickets] = useState(player.wickets);
  const [hs, setHs] = useState(player.hs);
  const [hw, setHw] = useState(player.hw);

  const navigate = useNavigate();
  const editPlayer = () => {
    const updatedPlayer = {
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

    fetch(`https://61c55338c003e70017b7965d.mockapi.io/csk/${player.id}`, {
      method: "PUT",
      body: JSON.stringify(updatedPlayer),
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
        style={{ width: "90%", margin: "0px 8px", paddingLeft: "5px" }}
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
      <Button onClick={editPlayer} variant="contained" color="success">
        Save Details
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
