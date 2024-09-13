import About from "../components/About.jsx";
import Contact from "../components/Contact.jsx";
import Education from "../components/Education.jsx";
import Footer from "../components/Footer.jsx";
import NavBar from "../components/NavBar.jsx";
import Projects from "../components/Projects.jsx";
import Skills from "../components/Skills.jsx";
import Timeline from "../components/Timeline.jsx";
const ContentPage = () => {
  return (
    <>
      <NavBar></NavBar>
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default ContentPage;
