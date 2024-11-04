import { blue } from "@mui/material/colors";
import Quote from "../Assets/Images/quote.png";
import Avatar from "@mui/material/Avatar";
export default function FeedBack() {
  return (
    <>
      <div
        className="Testimonals"
        style={{ width: "20%", marginBottom: "10px" }}
      >
        <h3 style={{ color: "green", fontSize: "30px" }}> Testimonals</h3>
        <h1 style={{ color: "white" }}>
          Here's what <br></br>student are saying
        </h1>
        <center>
          <div className="ImageChanger">
            <span className="Dot"></span>
            <span className="Dot"></span>
            <span className="Dot"></span>
          </div>
        </center>
      </div>
      <div className="Feedbacks">
        <div className="Feeds">
          <img className="quote" src={Quote} />
          <p>
            I chose ALLEN Online Programs because I wanted to balance my NEET
            prep with my school schedule. The program's structure, from daily
            homework to post-class handouts , was well-organized & my teachers
            were always available in case I had any doubts.
          </p>
          <div
            className="FeedbackUser"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Avatar
              style={{ marginTop: "5px" }}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div>
              <h3>Ritesh kumar</h3>
              <h5 style={{ marginBlock: "0" }}>NEET-UG 2024, Score 710/720</h5>
            </div>
          </div>
        </div>
        <div className="Feeds">
          <img className="quote" src={Quote} />
          <p>
            I chose ALLEN Online Programs because I wanted to balance my NEET
            prep with my school schedule. The program's structure, from daily
            homework to post-class handouts , was well-organized & my teachers
            were always available in case I had any doubts.
          </p>
          <div
            className="FeedbackUser"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Avatar
              style={{ marginTop: "5px" }}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div>
              <h3>Ritesh kumar</h3>
              <h5 style={{ marginBlock: "0" }}>NEET-UG 2024, Score 710/720</h5>
            </div>
          </div>
        </div>{" "}
        <div className="Feeds">
          <img className="quote" src={Quote} />
          <p>
            I chose ALLEN Online Programs because I wanted to balance my NEET
            prep with my school schedule. The program's structure, from daily
            homework to post-class handouts , was well-organized & my teachers
            were always available in case I had any doubts.
          </p>
          <div
            className="FeedbackUser"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Avatar
              style={{ marginTop: "5px" }}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div>
              <h3>Ritesh kumar</h3>
              <h5 style={{ marginBlock: "0" }}>NEET-UG 2024, Score 710/720</h5>
            </div>
          </div>
        </div>{" "}
        <div className="Feeds">
          <img className="quote" src={Quote} />
          <p>
            I chose ALLEN Online Programs because I wanted to balance my NEET
            prep with my school schedule. The program's structure, from daily
            homework to post-class handouts , was well-organized & my teachers
            were always available in case I had any doubts.
          </p>
          <div
            className="FeedbackUser"
            style={{ display: "flex", justifyContent: "space-around" }}
          >
            <Avatar
              style={{ marginTop: "5px" }}
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />

            <div>
              <h3>Ritesh kumar</h3>
              <h5 style={{ marginBlock: "0" }}>NEET-UG 2024, Score 710/720</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
