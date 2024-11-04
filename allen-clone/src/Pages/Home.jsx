import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import ImageSlider from "../Component/imageSlider";
import RegisterImage from "../Assets/Images/RegisterImage.webp";
import image1 from "../Assets/Images/image1.webp";
import image2 from "../Assets/Images/image2.webp";
import image3 from "../Assets/Images/image3.webp";
import image4 from "../Assets/Images/image4.webp";
import Banner1 from "../Assets/Images/Banner1.webp";
import Banner2 from "../Assets/Images/Banner2.webp";
import Banner3 from "../Assets/Images/Banner3.webp";
import Banner4 from "../Assets/Images/Banner4.webp";
import Result1 from "../Assets/Images/Result1.webp";
import Result2 from "../Assets/Images/Result2.webp";
import EyLogo from "../Assets/Images/EyLogo.webp";
import ImageDetailSlider from "../Component/ImageDetailSlider.jsx";
import MobileSlider from "../Component/MobileViewSlider.jsx";
import Tiles from "../Component/ClassTiles.jsx";
import FeedBack from "../Component/FeedBack.jsx";

const images = { image1, image2, image3, image4 };
const BannerImages = { Banner1, Banner2, Banner3, Banner4 };
const ResultImage = { Result1, Result2 };

export default function Home() {
  return (
    <>
      <div style={{ margin: "40px 0 10px 0", height: "40px" }}>
        <Link to="#">
          <img src={RegisterImage} alt="loading"></img>
        </Link>
      </div>
      <div className="SliderDiv">
        <div className="ClassDetail">
          <div style={{ color: "white" }}>
            <h1>
              Your Dream. <br />
              Your Expertise
            </h1>
            <br />
            <br />
          </div>
          <div style={{ color: "white" }}>
            <h2>What brings you to us today?</h2>
            <br />
            <div className="" style={{ display: "flex" }}>
              <button>Neet</button>
              <button>JEE</button>
              <button>Grade 6 - 10</button>
            </div>
          </div>
        </div>
        <ImageSlider props={images} widthVal="400px" />
      </div>
      <div className="Banner">
        <ImageSlider props={BannerImages} widthVal={"100%"} />
      </div>
      <div className="Remarkable-Result">
        <center>
          <h1 style={{ font: "30px", color: "white" }}>
            Our Remarkable Result
          </h1>
        </center>
        <div className="ResultDiv">
          <ImageDetailSlider props={ResultImage} timer={3} />
        </div>
      </div>
      <center style={{ fontSize: "30px", color: "white" }}>
        ALLEN App Advantage
      </center>
      <div className="MobileSlideSec">
        <div className="MobileDetail">
          <h2>Achieve your dreams with the ALLEN App!</h2>
          <p>
            Top Kota faculty, customised study tools, and AI-powered
            learning—all in one app
          </p>
          <p>
            *All impact methodology &measurement validated by{" "}
            <img
              src={EyLogo}
              height={20}
              width={20}
              style={{ position: "absolute", marginLeft: "5px" }}
            />
          </p>
        </div>
        <div className="MobileSlide">
          <MobileSlider />
        </div>
      </div>
      <div className="CourseTilesBlock">
        <h1>Discover the perfect online program</h1>
        <Tiles />
      </div>
      <div className="Centres">
        <h1>Looking for a classroom based program?</h1>
        <div className="CentreBlock">
          <div className="BlockSIde">
            <h2>Present in 53 cities with 250+ classrooms</h2>
            <button>Find a Center</button>
          </div>
          <div className="" style={{ marginRight: "20px" }}>
            <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1707820846/Updated_size_classroom_ck4yjp.webp" />
          </div>
        </div>
      </div>

      <div className="FeedBackSec">
        <FeedBack />
      </div>
      <div className="DownloadSec">
        <img src="https://res.cloudinary.com/dpzpn3dkw/image/upload/v1729680108/download_app_dark_x7um4p.webp" />
      </div>
    </>
  );
}
