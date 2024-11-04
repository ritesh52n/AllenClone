import { useState } from "react";
import Tiles from "../Component/ClassTiles.jsx";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
export default function Adsat() {
  const data = [
    {
      Question: "01. What is the ADSAT test? How can I benefit from it?",
      Ans: "ADSAT (ALLEN Digital Scholarship Admission Test) is an opportunity to secure scholarships of up to 90% on ALLEN Online Programs. The test has no registration fee. If you're interested in Offline courses, kindly visit your nearest ALLEN center to take the test.",
    },
    {
      Question: "02. Who can appear for ADSAT?",
      Ans: "Students studying in class 7th upto 11th in 2023-24 are eligible to participate in ADSAT 2024. Students can utilise the scholarships to enrol in online programs for class 8th upto 12th respectively for the academic year 2024-25.",
    },
    {
      Question: "03. What is the ADSAT test pattern?",
      Ans: "The exam duration will be 2 hrs. It consists of multiple choice questions as per topic-wise syllabus available on the website.",
    },
    {
      Question: "04. What is the last date for registration?",
      Ans: "If you register on a Saturday, you will be allotted to a test slot on next Sunday. Example, for the exam on 10th March 2024, you have to register by 8th March 2024.",
    },
    {
      Question: "05. All ADSAT tests will be proctored - What is proctoring?",
      Ans: "Proctored tests are timed exams that you take while proctoring software monitors camera video and audio. The data recorded by the proctoring software is transferred to a proctoring service for review, and a trust score is generated.",
    },
    {
      Question: "06. What does trustscore represent in a proctored exam?",
      Ans: "Trustscore is a mechanism to enforce test integrity and is a good indicator of the test credibility for users taking the proctored online test. The student's behavior and movements during the online proctored test are recorded and evaluated by software. Students start off their tests with a trust score of 100%, which is progressively reduced with every non-compliant behaviour. Trust score will be an important decision parameter for online ADSAT tests - Lower trust score may impact the scholarship despite great test scores.",
    },
    {
      Question: "07. What is the test taking process?",
      Ans: "Students can access the test on the day of the test via a link that will be shared on SMS and email, as well as on the website. Student can take the test anytime within their test window (9am-1pm for Class 7th to 9th, 2pm-6pm for Class 10th and 11th). It is advised to log in latest by 1 hr before the end of your slot time to avoid any access issues (ie by 5pm at the latest for Class 10th and 11th). To participate in the test, students require a mobile, tablet, or computer with a reliable internet connection and a functional camera. The login details will be as follows: Username: Registered Phone number for ADSAT Password: DOB",
    },
    {
      Question: "08. When will the scholarship results be published?",
      Ans: "The scholarship results will be published within a day of the exam. SMS communication will also be sent on registered mobile number. Students should download this app - https://onelink.to/allenapp to see their scholarship results. (Note: Only scholarship discount is displayed on the app. Test results, marks, ranks will not be published for ADSAT)",
    },
    {
      Question: "09. When is the next ADSAT?",
      Ans: "All ADSATs for this year have been concluded. The next one will be in 2025. Keep an eye on www.allen.in and the ALLEN app for updates on upcoming ADSATs.",
    },
  ];
  const [activeIndex, setActive] = useState(null);
  return (
    <div className="" style={{ marginTop: "30px" }}>
      <img
        src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1718962329/FAQs/adsat_dark_mode_web_em8fmq.png"
        height={300}
        style={{ width: "100%", margin: "30px 0 70px 0" }}
      />
      <div className="CourseTilesBlock">
        <h1>Discover the perfect online program</h1>
        <Tiles />
      </div>
      <div style={{ width: "", height: "400px", margin: "10px 0 130px 30px" }}>
        <img
          style={{ width: "90%" }}
          src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1718962100/FAQs/Talentex_Light_and_Dark_Mode_web_t3gel4.webp"
        />
      </div>
      <div style={{ color: "white", margin: "50px" }}>
        <h2>Download the Allen App</h2>
        <p style={{ lineHeight: "1.5rem" }}>
          Explore the Allen Online Courses and Experience Free trial classes
        </p>
        <button
          style={{
            marginTop: "30px",
            height: "60px",
            width: "170px",
            borderRadius: "20px ",
            fontWeight: "bold",
            backgroundColor: "transparent",
            borderColor: "white",
            color: "white",
          }}
        >
          Download Now
        </button>
      </div>

      <div className="Question-Section">
        <center style={{ color: "white", marginBottom: "20px" }}>
          <h2>Frequently Asked Question</h2>
        </center>

        {data.map((val, index) => (
          <div
            className="QuestionList"
            onClick={() => {
              activeIndex === index + 1
                ? setActive(null)
                : setActive(index + 1);
            }}
          >
            <div className="Question " style={{ color: "white" }}>
              <h2>{val.Question}</h2>
              <ArrowDropDownIcon
                className={activeIndex === index + 1 ? "icon-active" : "icon"}
                style={{ marginRight: "10px" }}
              />
            </div>
            <div className={activeIndex === index + 1 ? "ans active" : "ans"}>
              <p>{val.Ans}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
