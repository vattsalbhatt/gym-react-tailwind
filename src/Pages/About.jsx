import Footer from "../components/Footer/Footer";
import GirlRunning from "../images/who-we-are/girl-run.png";
import GirlRedBg from "../images/who-we-are/girl-redbg.svg";
import GirlText from "../images/who-we-are/girl-side-text.png";
import GirlWind from "../images/who-we-are/wind.png";
import TitleRed from "../images/who-we-are/title-bg.svg";
import MainButton from "../components/MainButton";
import Img3 from "../images/AboutPage/3.jpg";
import Img4 from "../images/AboutPage/4.jpg";
import Target from "../images/AboutPage/target.png";
import Mountain from "../images/AboutPage/mountain.png";
import { useState } from "react";
import LogoSide from "../images/logo/logo-footer.svg";
import SideImg1 from "../images/sidebar/1.jpg";
import SideImg2 from "../images/sidebar/2.jpg";
import SideImg3 from "../images/sidebar/3.jpg";
import SideImg4 from "../images/sidebar/4.jpg";
import SideImg5 from "../images/sidebar/5.jpg";
import SideImg6 from "../images/sidebar/6.jpg";
import { Link } from "react-router-dom";

function About() {
  const [sidebar, setSideBar] = useState(false);
  const sideBar = () => {
    setSideBar(!sidebar);
  };

  return (
    <>
      <div>
        <div className="min450:block hidden">
          <div
            className={`flex flex-col fixed w-[40rem] min450:w-full h-[100vh] bg-white top-0 left-0 z-[9999999999] p-[45px] gap-24 overflow-x-hidden ease-in-out duration-[0.5s] ${
              sidebar ? "left-0" : "-left-[100%]"
            }`}
          >
            {/* logo & X */}

            <Link to="/" title="home">
              <div className="flex justify-between items-center">
                <img src={LogoSide} alt="logo_img" className="w-[13rem]" />
                <i
                  onClick={sideBar}
                  className="fa-solid fa-xmark text-[#ff0336] text-[3.3rem] cursor-pointer"
                ></i>
              </div>
            </Link>
            {/* about us */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[2rem] font-bold">About Us</h3>
              <p className="text-[1.6rem] font-medium text-[#000000b1]">
                Find out who we are and what makes us unique. We are a
                community-driven gym committed to providing personalized fitness
                experiences for all levels of fitness enthusiasts in a welcoming
                and supportive environment.
              </p>
            </div>
            {/* gallery */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[2rem] font-bold">Gallery</h3>
              <div className="grid grid-cols-3 grid-rows-2 gap-4">
                <img
                  src={SideImg1}
                  alt="sidebar_gallery"
                  className="rounded-xl cursor-pointer "
                />
                <img
                  src={SideImg2}
                  alt="sidebar_gallery"
                  className="rounded-xl cursor-pointer "
                />
                <img
                  src={SideImg3}
                  alt="sidebar_gallery"
                  className="rounded-xl cursor-pointer "
                />
                <img
                  src={SideImg4}
                  alt="sidebar_gallery"
                  className="rounded-xl cursor-pointer "
                />
                <img
                  src={SideImg5}
                  alt="sidebar_gallery"
                  className="rounded-xl cursor-pointer "
                />
                <img
                  src={SideImg6}
                  alt="sidebar_gallery"
                  className="rounded-xl cursor-pointer "
                />
              </div>
            </div>
            {/* contact */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[2rem] font-bold">Contact Info</h3>
              <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                <i className="fa-solid fa-location-dot text-[#ff0336]"></i>
                &nbsp; 59 Street, House Newyork City
              </p>
              <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                <i className="fa-solid fa-phone text-[#ff0336]"></i>&nbsp;
                +123-678800090
              </p>
              <p className="text-[1.6rem] font-medium text-[#000000b1] hover:text-[#ff0336] cursor-pointer ease-in duration-200">
                <i className="fa-solid fa-envelope text-[#ff0336]"></i>
                &nbsp; gymate@gymail.com
              </p>
            </div>
            {/* follow us */}
            <div className="flex flex-col gap-6">
              <h3 className="text-[2rem] font-bold">Follow Us</h3>
              <div className="flex gap-5">
                <span className="bg-[#ff0336] rounded-full py-[12px] px-[17px] cursor-pointer">
                  <i className="fa-brands fa-facebook-f text-[2.2rem] text-white"></i>
                </span>
                <span className="bg-[#ff0336] rounded-full py-[12px] px-[12px] cursor-pointer">
                  <i className="fa-brands fa-twitter text-[2.2rem] text-white"></i>
                </span>
                <span className="bg-[#ff0336] rounded-full py-[10px] px-[13px] cursor-pointer">
                  <i className="fa-brands fa-instagram text-[2.2rem] text-white"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
        <section className="login-section">
          <div className="login-banner relative justify-center flex">
            <h1 className="text-white absolute bottom-[25px] text-[3rem] font-bold">
              About Us
            </h1>
          </div>
          <div className="container page-padding py-[5rem]">
            <div className="grid grid-cols-[1fr_1fr] h-[60rem] md1000:grid-cols-1">
              {/* title div -- */}
              <div className="flex flex-col !text-left relative items-right justify-center md1000:items-center md1000:!text-center">
                <p className="text-white relative z-10 text-[15px] uppercase font-bold mb-8 ml-20 md1000:ml-3 ">
                  who we are
                </p>
                <img
                  src={TitleRed}
                  alt="text_bg"
                  className="w-[21rem] absolute top-[120px] min450:top-[84px] min375:top-[68px]"
                />

                <h2 className="text-[3.6rem] max-w-[53rem] font-bold mb-4">
                  We Will Give You Strength and Health
                </h2>
                <p className="text-[#646464] font-medium text-[15px] max-w-[50rem] ">
                  At Gymate, we are dedicated to helping you achieve the body of
                  your dreams. Our expert trainers and nutritionists will work
                  with you to create a personalized fitness and nutrition plan
                  that helps you reach your specific goals.
                </p>
                <MainButton
                  color={`!text-white`}
                  bg={`bg-[#ff0336]`}
                  goTo="/contact"
                  text="contact us"
                  arrowColor={`!text-white`}
                  cN="pricing-cta blog-cta"
                />
              </div>
              {/*  */}
              <div className="relative w-[80%] -top-[90px] left-[40px] md1000:hidden">
                <img
                  src={GirlRunning}
                  alt="girl_running"
                  className="girl-running"
                />
                <img src={GirlRedBg} alt="bg-red" className="girl-bg" />
                <img src={GirlText} alt="bg-text" className="girl-text" />
                <img src={GirlWind} alt="bg-wind" className="girl-wind" />
              </div>
            </div>
            {/*  */}
            <div className="mt-[10rem]">
              <div className="grid grid-cols-2 grid-rows-2 w-full min620:grid-cols-1">
                <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                  <img src={Target} alt="target_img" className="w-[9rem]" />
                  <h2 className="text-[36px] font-bold mt-3">Our History</h2>
                  <p className="text-[16px] font-medium text-[#646464] mt-5">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit
                    Exercitation veniam consequat.
                  </p>
                </div>
                {/*  */}
                <div className="w-full bg-white h-[43rem]">
                  <img
                    src={Img3}
                    alt="about_img"
                    className="w-full h-full object-cover bg-center"
                  />
                </div>
                {/*  */}
                <div className="w-full bg-white h-[43rem]">
                  <img
                    src={Img4}
                    alt="about_img"
                    className="w-full h-full object-cover bg-center"
                  />
                </div>
                {/*  */}
                <div className="w-full bg-white h-[43rem] flex flex-col justify-center items-center text-center px-[100px] min800:px-[10px]">
                  <img src={Mountain} alt="target_img" className="w-[9rem]" />
                  <h2 className="text-[36px] font-bold mt-3">Our History</h2>
                  <p className="text-[16px] font-medium text-[#646464] mt-5">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit mollit
                    Exercitation veniam consequat.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </section>
      </div>
    </>
  );
}

export default About;
