import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";

function useImageSlider(props, timer) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageArray = Object.values(props);
  const images = imageArray.length;

  const imageSlide = () => {
    setCurrentIndex((prev) => (prev === images - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    console.log(timer);
    setInterval(imageSlide, timer * 1000);
  }, []);
  return {
    currentIndex,
    setCurrentIndex,
  };
}

export default function ImageDetailSlider({ props, timer }) {
  const { currentIndex, setCurrentIndex } = useImageSlider(props, timer);
  return (
    <>
      <div style={{ display: "flex" }}>
        <span style={{ alignSelf: "center", marginRight: "20px" }}>
          <ArrowCircleLeftOutlinedIcon
            style={{ fontSize: "35px", color: "white" }}
          />
        </span>
        <div className="Result-Slider" style={{ display: "flex" }}>
          <div
            className="ResultImageList"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {" "}
            {Object.keys(props).map((data, index) => (
              <div className="Image-Detail" style={{ display: "flex" }}>
                <img src={props[data]} />
                <div className="StudentScore">
                  <h2>Allen Online Program JEE Adv Online</h2>
                  <h1>2024 Result</h1>
                  <p style={{ fontWeight: "bold", fontSize: "20px" }}>
                    {" "}
                    14 Student have score more than 200
                  </p>
                  <span style={{ fontWeight: "bold", fontSize: "larger" }}>
                    <Link style={{ color: "#388ce6" }}>
                      View Detailed Result
                    </Link>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
        <span style={{ alignSelf: "center" }}>
          <ArrowCircleRightOutlinedIcon
            style={{ fontSize: "35px", marginLeft: "20px", color: "white" }}
          />
        </span>
      </div>

      <center>
        <div className="ImageChanger">
          {Object.keys(props).map((item, index) => (
            <span className="Dot" onClick={() => setCurrentIndex(index)}></span>
          ))}
        </div>
      </center>
      <br />
    </>
  );
}
