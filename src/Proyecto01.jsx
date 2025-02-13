import styled from "styled-components";
import plantilla from "./imagenes/proyecto1.jpg";
import { FaGithub, FaFigma } from "react-icons/fa";

const ProjectContainer = styled.article`
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: #1f1b24;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  align-items: center;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProjectImageContainer = styled.div`
  flex: 1;
  min-width: 400px;
  overflow: hidden;
  border-radius: 10px;

  @media (max-width: 768px) {
    min-width: unset;
    width: 100%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.03);
  }
`;

const ProjectContent = styled.div`
  flex: 1;
  padding: 0 1rem;
  display: flex;
  flex-direction: column; // Ensure items stack vertically
  justify-content: center; // Center horizontally
  align-items: center; // Center vertically
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  color: white;
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color: rgb(61, 207, 182);
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #dedede;
  margin-bottom: 1.5rem;
`;

const TechList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
`;

const TechItem = styled.span`
  background-color: #f0f0f0;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  &:hover {
    transform: scale(1.03);
  }
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

// Nuevos estilos para los iconos sociales
const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  & a {
    color: white;
    transition: color 0.3s ease;

    &:hover {
      color: rgb(61, 207, 182); // Cambia el color al pasar el mouse
    }
  }

  & svg {
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const Proyecto01 = () => {
  return (
    <>
      <SectionTitle id="projects">🚀 Proyectos</SectionTitle>
      <ProjectContainer>
        <ProjectImageContainer>
          <ProjectImage src={plantilla} alt="Descripción del proyecto" />
        </ProjectImageContainer>

        <ProjectContent>
          <ProjectTitle>Servi Land Rover</ProjectTitle>
          <ProjectDescription>
            Landing page o página de aterrizaje para taller automotriz donde se
            muestran y ofrecen servicios para facilitar a posibles clientes
            comunicarse.
          </ProjectDescription>

          <TechList>
            <TechItem>React</TechItem>
            <TechItem>JavaScript</TechItem>
            <TechItem>Vercel</TechItem>
            <TechItem>Vite</TechItem>
            <TechItem>Styled Components</TechItem>
          </TechList>

          {/* Iconos sociales */}
          <SocialIcons>
            <a
              href="https://github.com/dart01/Servi-Land-Rover"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.figma.com/design/7svbo4l4k3JQIlNflSF8aa/Servi-Land-Rover?node-id=0-1&t=GzIMgcCIUofJvxVs-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFigma />
            </a>
          </SocialIcons>
        </ProjectContent>
      </ProjectContainer>
    </>
  );
};

export default Proyecto01;
