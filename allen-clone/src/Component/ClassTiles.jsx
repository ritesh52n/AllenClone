import { Link } from "react-router-dom";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import Neet from "../Assets/Images/Neet.webp";
import JEE from "../Assets/Images/JEE.webp";
import Classes from "../Assets/Images/Classes.webp";

export default function Tiles() {
  return (
    <div className="Tiles">
      <div className="TilesCard" style={{ backgroundImage: `url('${JEE}')` }}>
        <h2>JEE</h2>
        <Link>
          {" "}
          View <ArrowForwardRoundedIcon style={{ position: "absolute" }} />
        </Link>
      </div>
      <div className="TilesCard" style={{ backgroundImage: `url('${Neet}')` }}>
        <h2>NEET</h2>
        <Link>
          {" "}
          View <ArrowForwardRoundedIcon style={{ position: "absolute" }} />
        </Link>
      </div>{" "}
      <div
        className="TilesCard"
        style={{ backgroundImage: `url('${Classes}')` }}
      >
        <h2>Grade 6 - 10</h2>
        <Link>
          View <ArrowForwardRoundedIcon style={{ position: "absolute" }} />
        </Link>
      </div>
    </div>
  );
}
