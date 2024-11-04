import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="Header">
      <div className="leftNav">
        <div
          className="HeaderLink"
          style={{ fontSize: "40px", fontWeight: "bolder" }}
        >
          ALLEN
        </div>
        <div className="HeaderLink">
          <span>TestSeries</span>
          <div className="HeaderContent">
            <span>
              <Link>Class 11</Link>
            </span>
            <span>
              <Link>Class 11</Link>
            </span>
            <span>
              <Link>Class 11</Link>
            </span>
          </div>
        </div>
        <div className="HeaderLink">
          <span>Programs</span>
          <div className="HeaderContent">
            <span>Class 11</span>
            <span>Class 11</span>
            <span>Class 11</span>
          </div>
        </div>
        <div className="HeaderLink">
          <span>ScholarShips</span>
          <div className="HeaderContent">
            <span>
              <Link to={"/Adsat"}>Adsat</Link>
            </span>
            <span>Class 11</span>
            <span>Class 11</span>
          </div>
        </div>
        <div className="HeaderLink">
          <span>TestSeries</span>
          <div className="HeaderContent">
            <span>Class 11</span>
            <span>Class 11</span>
            <span>Class 11</span>
          </div>
        </div>

        <div className="HeaderLink">
          <span>StudyMaterials</span>
          <div className="HeaderContent">
            <span>Class 11</span>
            <span>Class 11</span>
            <span>Class 11</span>
          </div>
        </div>
      </div>
      <div className="RightNav">
        <button style={{}}>Call to Us</button>

        <button
          style={{
            width: "100px",
            backgroundColor: "hsla(223, 30%, 4%, 0)",
            color: "white",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}
