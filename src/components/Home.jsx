import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div
      class="cover-container cover"
      id="home"
      style={{
        backgroundImage: `url("cover-image-2.jpg")`,
        backgroundSize: "cover",
        height: "100vh",
        width: "100vw",
        opacity: "0.6",
        zIndex: "-1",
      }}
    >
      <main class="px-3 ">
        <h1>Hi, I am Kunal.</h1>
        <p class="lead">
          I am a Web Developer with extensive knowledge of MERN stack
          development. <br />
        </p>
        <p class="lead">
          <Link to="/enter" class=" home-btn">
            Know more
          </Link>
        </p>
      </main>
    </div>
  );
};

export default Home;
