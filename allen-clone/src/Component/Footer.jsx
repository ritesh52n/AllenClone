import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="Footer-content">
        <div className="Columns">
          <h4>About</h4>
          <Link> About us</Link>
          <Link>Blog</Link>
          <Link>News</Link>
          <Link>MyExam EduBlogs</Link>
          <Link>Privacy policy</Link>
          <Link>Public notice</Link>
          <Link>Careers</Link>
        </div>
        <div className="Columns">
          <h4>Help&Support</h4>
          <Link>Refund policy</Link>
          <Link>Transfer policy</Link>
          <Link>Terms & Conditions</Link>
          <Link>Contact us</Link>
        </div>
        <div className="Columns">
          <h4>Popular Goals</h4>
          <Link> NEET UG</Link>
          <Link>JEE Advanced</Link>
          <Link>6th to 10th</Link>
        </div>
        <div className="Columns">
          <h4>Courses</h4>
          <Link>Ultimate Program</Link>
          <Link>Distance learning</Link>
          <Link>Online Test Series</Link>
        </div>
        <div className="Columns">
          <h4>Centers</h4>
          <Link>Kota</Link>
          <Link>Banglore</Link>
          <Link>Indore</Link>
          <Link>Kota</Link>
          <Link>Banglore</Link>
          <Link>More Centres</Link>
        </div>
      </div>
      <hr></hr>
      <div className="Footer-Foot">
        <span>
          <p style={{ color: "lightblue" }}>
            ALLEN Career Institute Pvt. Ltd. © All Rights Reserved.
          </p>
        </span>
        <span>
          <Link>
            <YouTubeIcon />
          </Link>

          <Link>
            <InstagramIcon />
          </Link>

          <Link>
            <FacebookIcon />
          </Link>

          <Link>
            <XIcon />
          </Link>

          <Link>
            <LinkedInIcon />
          </Link>
        </span>
      </div>
    </div>
  );
}
