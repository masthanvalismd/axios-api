import { useState, useEffect } from "react";
import { Squad } from "./Squad";
import IconButton from "@mui/material/IconButton";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";


export function SquadList() {
  const [squadList, setSquadList] = useState([]);
  const navigate = useNavigate();

  const getSquad = () => {
    fetch("https://61c55338c003e70017b7965d.mockapi.io/csk", {
      method: "GET",
    })
      .then((data) => data.json())
      .then((sqd) => setSquadList(sqd));
  };
  useEffect(getSquad, []);

  const deletePlayer = (id) => {
    fetch(`https://61c55338c003e70017b7965d.mockapi.io/csk/${id}`, {
      method: "DELETE"
    }).then((data) => data.json())
    .then(()=>getSquad())
  }
  return (
    <div className="squad-list">
      {squadList.map(
        (
          {
            name,
            role,
            image,
            id,
          },
          index
        ) => (
          <Squad
            key={index}
            deleteButton={
              <IconButton
              color="error"
              onClick={() => deletePlayer(id)}
                aria-label="delete"
                title="Delete"
              >
                  <DeleteIcon />
                </IconButton>
              }
              editButton={
                <IconButton
                  color="warning"
                  onClick={() => navigate(`/player/edit/${id}`)}
                  aria-label="edit"
                  title="Edit"

                  >
                   <EditIcon /> 
                </IconButton>
              }
            id={id}
            name={name}
            role={role}
            image={image}
          />
        )
      )}
    </div>
  );
}

