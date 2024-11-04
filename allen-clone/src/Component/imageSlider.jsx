import { useState, useEffect, useRef } from "react";
export default function ImageSlider({ props, widthVal }) {
  const imageArray = Object.values(props);
  const images = imageArray.length;
  const [currentIndex, setCurrentIndex] = useState(0);

  const imageSlide = () => {
    setCurrentIndex((prev) => (prev === images - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    setInterval(imageSlide, 20000);
  }, []);
  return (
    <div className="ImageSLider">
      <div
        className="ImagesList"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,

          width: widthVal,
        }}
      >
        {Object.keys(props).map((item, index) => (
          <img className="slide" src={props[item]}></img>
        ))}
      </div>
      <center>
        <div className="ImageChanger">
          {Object.keys(props).map((item, index) => (
            <span className="Dot" onClick={() => setCurrentIndex(index)}></span>
          ))}
        </div>
      </center>
    </div>
  );
}
