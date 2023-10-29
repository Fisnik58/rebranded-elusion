import "@/styles/globals.css";
import { useState,useEffect } from "react";
import { Link as ScrollLink } from 'react-scroll';
import 'animate.css';


export default function App({ Component, pageProps }) {
  // JavaScript function to toggle the collapsed navbar
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  // Function to handle click on a navigation item
  const handleNavItemClick = () => {
    setIsNavbarOpen(false);
  };

  const [navbarBackgroundColor, setNavbarBackgroundColor] = useState(""); // Initial background color

  // Rest of the code...

  const handleScroll = () => {
    const scrollY = window.scrollY;
    // Define the scroll threshold where the color change should start (in pixels)
    const scrollThreshold = 30;

    // Calculate the new background color based on the scroll position
    const newBackgroundColor = scrollY > scrollThreshold ? "purple" : "#cb20ff";

    // Update the navbar background color state
    setNavbarBackgroundColor(newBackgroundColor);

    // Update the class of the navbar based on the scroll position
    const navbar = document.querySelector(".navbar");

    
  };
 
  useEffect(() => {
    const images = document.querySelectorAll(".fadein");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4, // Adjust this threshold based on your preference
    };

    const observer = new IntersectionObserver(fadeInOnScroll, observerOptions);
    images.forEach((img) => observer.observe(img));

    return () => observer.disconnect();
  });

  const fadeInOnScroll = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }, 200); // Adjust the delay time as needed
      }
    });
  };

  return (
    <>
     
  <div className="background-container " id="containerhome" >
    <video autoPlay loop muted className="background-video">
      <source src="/vids/egg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>


   <div className="container-fluid sticky-container">
   <div className="container container-of-about-us  "  >
    <nav
                className={`navbar navbar-expand-lg navbar-light  ${
                  isNavbarOpen ? "show" : ""
                }`}
                style={{ backgroundColor: navbarBackgroundColor }}
              >
                <div className="container">
                  <a className="navbar-brand" href="#">
                    <img
                      src="../elusionlogo.png"
                      width="70"
                      className="logo"
                      alt="Logo"
                    />
                  </a>
                  <button
                    className="navbar-toggler"
                    type="button"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setIsNavbarOpen((prevState) => !prevState)}
                  >
                    <span className="navbar-toggler-icon white-toggler-icon"></span>
                  </button>
                  <div
                    className={`collapse navbar-collapse expanded-menu ${
                      isNavbarOpen ? "show" : ""
                    }`}
                    id="navbarNav"
                  >
                    <ul className="navbar-nav ml-auto ">
                      <li className="nav-item li nav-item-0" >
                        <ScrollLink
                          className="nav-link Bozo scroll-link animated-element"
                          activeClass="active"
                          to="containerhome"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={handleNavItemClick}
                        >
                          <span style={{ color: "white" }}>Home</span>
                        </ScrollLink>
                      </li>
                      <li className="nav-item li animated-element nav-item-1">
                        <ScrollLink
                          className="nav-link Bozo scroll-link"
                          activeClass="active"
                          to="containerroadmap"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={handleNavItemClick}
                        >
                          <span style={{ color: "white" }}>Roadmap</span>
                        </ScrollLink>
                      </li>
                      <li className="nav-item li animated-element nav-item-2">
                        <ScrollLink
                          className="nav-link Bozo scroll-link"
                          activeClass="active"
                          to="containerofbridge"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={handleNavItemClick}
                        >
                          <span style={{ color: "white" }}>Bridge</span>
                        </ScrollLink>
                      </li>
                      <li className="nav-item li animated-element nav-item-3">
                        <ScrollLink
                          className="nav-link Bozo scroll-link"
                          activeClass="active"
                          to="containerofpartnerships"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={handleNavItemClick}
                        >
                          <span style={{ color: "white" }}>Partnership</span>
                        </ScrollLink>
                      </li>
                      <li className="nav-item li nav-item-4">
                        <ScrollLink
                          className="nav-link Bozo scroll-link"
                          activeClass="active"
                          to="containerofdevelopers"
                          spy={true}
                          smooth={true}
                          offset={-70}
                          duration={500}
                          onClick={handleNavItemClick}
                        >
                          <span style={{ color: "white" }}>Developers</span>
                        </ScrollLink>
                      </li>
                      
                    </ul>
                  </div>
                </div>
              </nav>
      
    </div>
   </div>

    <div
      style={{
        height: "90vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        
      }}
    >
      <div className="container fadein">
        <div className="row d-flex justify-content-center align-items-center">
          <h1 className="text-white text-center header-1">
            The Next Gen Layer 2 <br />
            Blockchain
          </h1>
        </div>
        <div className="row d-flex justify-content-center">
          <h5
            className="text-center"
            style={{ color: "#616D7E", paddingTop: "20px" }}
          >
            Scaling any existing EVM Blockchain
          </h5>
        </div>
        <div
          class="d-flex justify-content-center align-items-center"
          style={{ paddingTop: "40px" }}
        >
          <a
            href="https://t.me/layerium"
            target="_blank"
            class="button w-button"
          >
            Join Telegram
          </a>
        </div>
      </div>
    </div>




      <div className="container" id="containerroadmap">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "100px",
            paddingBottom:"100px"
          }}
        >
          <h4 className="text-center subtitle fadein">Solving the Problem</h4>
        </div>
        <h1
          style={{ paddingBottom: "80px" }}
          className="text-white text-center header-2 fadein"
        >
          The existing Layer 2 can only solve the scalability problem on One
          Blockchain
        </h1>
        <div className="grid-container ">
          <div className="custom-div custom-div-1 fadein">
            <div className="main-icon">
              <div class="icon-feature-bg">
                <img
                  src="https://uploads-ssl.webflow.com/64967c521624e29a27ba6f27/64967c531624e29a27ba6f86_icon%201.svg"
                  loading="lazy"
                  alt=""
                  class="icon-feature"
                />
              </div>
            </div>
            <h3 className="text-white text-center">Universality</h3>
            <p
              style={{ color: "#616D7E", fontSize: "20px" }}
              className="text-center"
            >
              Layerium can solve the problem by creating a Layer 2 that can work
              within any EVM Blockchain
            </p>{" "}
          </div>
          <div className="custom-div fadein">
            <div className="main-icon">
              <div class="icon-feature-bg">
                <img
                  src="https://uploads-ssl.webflow.com/64967c521624e29a27ba6f27/64967c531624e29a27ba6f87_icon%202.svg"
                  loading="lazy"
                  alt=""
                  class="icon-feature"
                />
              </div>
            </div>
            <h3 className="text-white text-center">Security</h3>
            <p
              style={{ color: "#616D7E", fontSize: "20px" }}
              className="text-center"
            >
              Layerium solves the scalability problem with the Optimistic Rollup
              Security remains at the same level as the existing Layer 2{" "}
            </p>
          </div>
          <div className="custom-div fadein">
            <div className="main-icon">
              <div class="icon-feature-bg">
                <img
                  src="https://uploads-ssl.webflow.com/64967c521624e29a27ba6f27/64967c531624e29a27ba6faf_icon%202%20large.svg"
                  loading="lazy"
                  alt=""
                  class="icon-feature"
                />
              </div>
            </div>
            <h3 className="text-white text-center">Governance</h3>
            <p
              style={{ color: "#616D7E", fontSize: "20px" }}
              className="text-center"
            >
              We enable Governance on Optimistic and make this fair for all
              users{" "}
            </p>
          </div>
          <div className="custom-div fadein">
            <div className="main-icon">
              <div class="icon-feature-bg">
                <img
                  src="https://uploads-ssl.webflow.com/64967c521624e29a27ba6f27/64967c531624e29a27ba6f8a_icon%204.svg"
                  loading="lazy"
                  alt=""
                  class="icon-feature"
                />
              </div>
            </div>
            <h3 className="text-white text-center">Transaction Speed</h3>
            <p
              style={{ color: "#616D7E", fontSize: "20px" }}
              className="text-center"
            >
              Designed to accelerate the network, Layerium offers transaction
              speeds that can compete with the existing Layer 2{" "}
            </p>
          </div>
          <div className="custom-div fadein">
            <div className="main-icon">
              <div class="icon-feature-bg">
                <img
                  src="https://uploads-ssl.webflow.com/64967c521624e29a27ba6f27/64967c531624e29a27ba6fb6_blog%201.svg"
                  loading="lazy"
                  alt=""
                  class="icon-feature"
                  width={30}
                />{" "}
              </div>
            </div>
            <h3 className="text-white text-center">Modular</h3>
            <p
              style={{ color: "#616D7E", fontSize: "20px" }}
              className="text-center"
            >
              Modular layer using independent components and easy access for
              data avalability
            </p>
          </div>
          <div className="custom-div fadein">
            <div className="main-icon">
              <div class="icon-feature-bg">
                <img
                  src="https://uploads-ssl.webflow.com/64967c521624e29a27ba6f27/64967c531624e29a27ba6f88_icon%206.svg"
                  loading="lazy"
                  alt=""
                  class="icon-feature"
                />
              </div>
            </div>
            <h3 className="text-white text-center">Interoperability</h3>
            <p
              style={{ color: "#616D7E", fontSize: "20px" }}
              className="text-center"
            >
              Outstanding inter-blockchain communication capabilities that allow
              Layerium to communicate with any EVM.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="container  fadein" >
        <div className="row d-flex" style={{ paddingTop: "100px" }} id="containerofbridge">
          <div className="col-xl-6 col-lg-12" >
            <div className="div-of-tech" >
              <h4 className=" subtitle" >Technology</h4>
            </div>
            <div>
              <h2
                className=" text-white tech-header header-3"
                style={{ color: "#616D7E" }}
               
              >
                ADVANCED LAYER 2 TAKING BLOCKCHAIN TO ANOTHER LEVEL
              </h2>
              <p
                className=" tech-paragraph"
                style={{ color: "#616D7E", fontSize: "20px" }}
              >
                No restrictions, no limitations, cross anywhere
                <br />
                Layer 2 that turns limitations into infinite possibilities
              </p>
            </div>
          </div>

          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="col-xl-6 col-lg-12"
          >
            <video muted autoPlay playsInline loop width={500}>
              <source src="/vids/petverse_video.mp4" />
            </video>
          </div>
        </div>
      </div>
      <div className="" style={{ paddingTop: "200px", paddingBottom: "200px" }} id="containerofpartnerships">
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h4 className="subtitle text-center fadein">Supported by</h4>
        </div>
        <div className="">
          <h1
            className=" fadein text-center text-white partnership-header header-4 "
            style={{ paddingBottom: "50px" }}
          >
            Meet our Partnership
          </h1>
        </div>
        <div className="container">
          <div className="grid-container grid-container-2">
            <div className="partnership-div fadein">
              <img src="/img/comingsoon.png" />
            </div>
            <div className="partnership-div fadein">
              <img src="/img/comingsoon.png" />
            </div>
            <div className="partnership-div fadein">
              <img src="/img/comingsoon.png" />
            </div>
            <div className="partnership-div fadein">
              <img src="/img/comingsoon.png" />
            </div>
            <div className="partnership-div fadein">
              <img src="/img/comingsoon.png" />
            </div>
            <div className="partnership-div fadein">
              <img src="/img/comingsoon.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="container fadein" style={{paddingBottom:"150px"}} id="containerofdevelopers ">
        <div className="row d-flex">
          <div
            style={{ display: "flex", justifyContent: "center" }}
            className="col-xl-6 col-lg-12"
          >
            <video muted autoPlay playsInline loop width={500}>
              <source src="/vids/developers.mp4" />
            </video>
          </div>
          <div className="col-xl-6 col-lg-12">
            <div className="div-of-tech">
              <h4 className=" subtitle sub-tech">Developers</h4>
            </div>
            <div>
              <h2
                className=" text-white tech-header header-5"
                style={{ color: "#616D7E" }}
              >
                Built by developers, for developers
              </h2>
              <p
                className=" tech-paragraph"
                style={{ color: "#616D7E", fontSize: "20px" }}
              >
                Developers can use Layerium and build something amazing. <br />
                Applications that already exist in any EVM can easily be ported
                here{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr style={{color:"#A2B3C6",height:"2px"}}/>
      <div style={{ display: "flex", justifyContent: "center" ,paddingTop:"50px",paddingBottom:"50px"}}>
        <img src="../elusion.png" style={{ width: "250px" }}  className="fadein"/>
      </div>
          <div className="d-flex justify-content-center">
          <div class="form-container fadein">
  <input type="text" placeholder="Subscribe with your email" class="cool-input" />
  <button type="submit" class="cool-button">Ok</button>
</div>
          </div>
    <br/>
          <div className="d-flex justify-content-center fadein">
          <hr style={{height:"3px",backgroundColor:"#203042",width:"90%"}}/>
          </div>
          <div className="container fadein">
          <p style={{color:"#A2B3C6"}}>Copyright Elusion™ © 2022. All rights reserved</p>
          </div>
          
    </>
  );
}
