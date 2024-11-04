import Phone from "../Assets/Images/Phone.png";
import Mobile1 from "../Assets/Images/Mobile1.png";
import Mobile2 from "../Assets/Images/Mobile2.png";
import Mobile3 from "../Assets/Images/Mobile3.png";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
export default function MobileSlider() {
  const [position, setPosition] = useState([0, 1, 2]);
  const images = [Mobile1, Mobile2, Mobile3];
  useEffect(() => {
    const interval = setInterval(() => {
      setPosition((prevPosition) => {
        const [left, center, right] = prevPosition;
        return [center, right, left];
      });
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  const circularVariants = {
    0: { translateX: "-150%", scale: 1, opacity: 0.5 },
    1: { translateX: "-100%", scale: 1.0, opacity: 1 },
    2: { translateX: "-50%", scale: 1, opacity: 0.5 },
  };

  return (
    <div className="MobileSLideContainer">
      <div className="SLiderTrack">
        {position.map((pos, index) => (
          <motion.div
            key={index}
            animate={circularVariants[index]}
            transition={{ duration: 3 }}
            className="MobileImage"
          >
            <img src={images[pos]} alt={`Mobile ${index + 1}`} />
            <h2>+30 Marks</h2>
            <p>Improvement in NEET scores with Allen App</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
