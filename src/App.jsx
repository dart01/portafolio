import Intro from "./Intro.jsx";
import AboutMe from "./AboutMe.jsx";
import ProjectCard from "./ProjectCard.jsx";
import projects from "./projectsData.jsx";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import styled from "styled-components";
import Particles from "./Particles.jsx";
import Contact from "./Contact.jsx";
import ScrollAnimation from "./ScrollAnimation.jsx";

const GlobalParticles = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: rgb(243, 249, 248);
  margin-bottom: 2rem;
  position: relative;
  display: block;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: rgb(61, 207, 182);
  }
`;

const App = () => {
  return (
    <>
      <GlobalParticles>
        <Particles
          particleCount={1200}
          particleSpread={10}
          speed={0.08}
          particleColors={["#3dcfb6", "#ffffff", "#a78bfa"]}
          particleBaseSize={9}
          alphaParticles={false}
          moveParticlesOnHover={true}
          particleHoverFactor={2}
          cameraDistance={12}
        />
      </GlobalParticles>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Intro />
        <ScrollAnimation delay={0}>
            <AboutMe />
        </ScrollAnimation>
        <ScrollAnimation delay={0}>
            <SectionTitle id="projects">🚀 Proyectos</SectionTitle>
        </ScrollAnimation>

        {projects.map((project, index) => (
            <ScrollAnimation key={project.id} delay={index * 0.15}>
                <ProjectCard {...project} />
            </ScrollAnimation>
        ))}
        <ScrollAnimation delay={0}>
            <Contact />
        </ScrollAnimation>
        <Footer />
      </div>
    </>
  );
};
export default App;
