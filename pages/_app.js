import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div>
        <div className="background-container">
          <video autoPlay loop muted className="background-video">
            <source src="/vids/egg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div>
          <div className="container container-of-about-us">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <a className="navbar-brand" href="#">
                  <img
                    src="../elusionlogo.png"
                    alt="Logo"
                    width="70"
                    className="logo"
                  />
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  style={{ backgroundColor: "darkgray" }}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
              </div>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">Home</li>
                  <li className="nav-item">Developers</li>
                  <li className="nav-item">Roadmap</li>
                  <li className="nav-item">Bridge</li>
                  <li className="nav-item">Tokenomics</li>
                </ul>
              </div>
            </nav>
          </div>
          <div
            style={{
              height: "90vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <h1
                  className="text-white text-center header-1"
                >
                  The Next Gen Layer 2 <br />
                  Blockchain
                </h1>
              </div>
              <div className="row">
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
          ]{" "}
        </div>
      </div>

      <div className="container">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "100px",
          }}
        >
          <h4 className="text-center subtitle">Solving the Problem</h4>
        </div>
        <h1
          style={{ paddingBottom: "80px" }}
          className="text-white text-center header-2"
        >
          The existing Layer 2 can only solve the scalability problem on One
          Blockchain
        </h1>
        <div className="grid-container">
          <div className="custom-div custom-div-1">
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
          <div className="custom-div">
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
          <div className="custom-div">
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
          <div className="custom-div">
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
          <div className="custom-div">
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
          <div className="custom-div">
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

      <div className="container ">
        <div className="row d-flex" style={{ paddingTop: "200px" }}>
          <div className="col-xl-6 col-lg-12">
            <div className="div-of-tech">
              <h4 className=" subtitle">Technology</h4>
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
      <div className="" style={{ paddingTop: "200px", paddingBottom: "200px" }}>
        <div
          className="container"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <h4 className="subtitle text-center">Supported by</h4>
        </div>
        <div className="">
          <h1
            className="text-center text-white partnership-header header-4"
            style={{ paddingBottom: "50px" }}
          >
            Meet our Partnership
          </h1>
        </div>
        <div className="container">
          <div className="grid-container grid-container-2">
            <div className="partnership-div">
              <img src="/img/comingsoon.png" />
            </div>
            <div className="partnership-div">
              <img src="/img/comingsoon.png" />
            </div>
            <div className="partnership-div">
              <img src="/img/comingsoon.png" />
            </div>
            <div className="partnership-div">
              <img src="/img/comingsoon.png" />
            </div>
            <div className="partnership-div">
              <img src="/img/comingsoon.png" />
            </div>
            <div className="partnership-div">
              <img src="/img/comingsoon.png" />
            </div>
          </div>
        </div>
      </div>

      <div className="container " style={{paddingBottom:"150px"}}>
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
              <h4 className=" subtitle sub-tech">Technology</h4>
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
        <img src="../elusion.png" style={{ width: "250px" }} />
      </div>
          <div className="d-flex justify-content-center">
          <div class="form-container">
  <input type="text" placeholder="Subscribe with your email" class="cool-input" />
  <button type="submit" class="cool-button">Ok</button>
</div>
          </div>
    <br/>
          <div className="d-flex justify-content-center">
          <hr style={{height:"3px",backgroundColor:"#203042",width:"90%"}}/>
          </div>
          <div className="container">
          <p style={{color:"#A2B3C6"}}>Copyright Elusion™ © 2022. All rights reserved</p>
          </div>
    </>
  );
}
