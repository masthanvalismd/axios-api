import { useNavigate } from "react-router";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";

export function Squad({ name, role, image, id, deleteButton, editButton }) {
  const navigate = useNavigate();
  return (
    <div className="squad-container">
      <img className="pic" src={image} alt="img" />
      <div className="details">
        <div className="header1">
          <h2>{name}</h2>
          <IconButton
            onClick={() => navigate(`/squad/${id}`)}
            color="primary"
            aria-label="aboutMovies"
            title="About"
          >
            <InfoIcon />
          </IconButton>
        </div>
        <div className="role">
          <p>{role}</p>
        </div>
        <div className="btn-grp">
          <div className="delBtn">{deleteButton}</div>
          <div className="editBtn">{editButton}</div>
        </div>
      </div>
    </div>
  );
}
