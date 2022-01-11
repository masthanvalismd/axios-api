import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { CardActions } from "@mui/material";

export function PlayerDetails() {
  const { id } = useParams();
  const [player, setPlayer] = useState([]);

  const getPlayer = () => {
    fetch(`https://61c55338c003e70017b7965d.mockapi.io/csk/${id}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((plr) => setPlayer(plr));
  };
  useEffect(getPlayer, [id]);

  const navigate = useNavigate();
  return (
    <div className="card-container">
      <Card sx={{ maxWidth: 1000 }}>
        <Button
          onClick={() => navigate("/squad")}
          startIcon={<ArrowBackIosIcon />}
        >
          Back to squad
        </Button>
   
          <div className="card-image">
            <img
              className="card-image1"
              src={player.image}
              alt="player_pic"
              style={{ height: "10rem" }}
            />
            <div className="card-text">
              <h1 className="card-title">{player.name}</h1>
              <h2>{player.role}</h2>
            </div>
          </div>
          <CardContent>
            <div className="header">
              <Card sx={{ minWidth: 275 }}>
                <CardActions> 
                  <div className="p-text">
                  <p>Personal Information</p>
                  </div>
                </CardActions>
                <CardContent>
                  <h3>
                    <span>Born    </span>
                    {player.born}
                  </h3>
                  <h3>
                    <span>Role</span>
                    {player.role}
                  </h3>
                  <h3>
                    <span>Bat-Style</span>
                    {player.batstyle}
                  </h3>
                  <h3>
                    <span>Bowl-Style</span>
                    {player.bowlingstyle}
                  </h3>
                </CardContent>
              </Card>
              <h3>{player.about}</h3>
            </div>
          </CardContent>
       
        <div className="table-data">
          <h2>Career Stats</h2>
          <table border="1">
            <thead style={{ background: "#1d75fd", color: "white" }}>
              <tr>
                <th>Matches</th>
                <th>Runs</th>
                <th>Wickets</th>
                <th>HS</th>
                <th>HW</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{player.matches}</td>
                <td>{player.runs}</td>
                <td>{player.wickets}</td>
                <td>{player.hs}</td>
                <td>{player.hw}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}
