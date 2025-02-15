import styled from "styled-components";
import plantilla from "./imagenes/tienda.jpg";
import { FaGithub, FaFigma } from "react-icons/fa";

const ProjectContainer = styled.article`
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: #1E1E1E;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); // Añadir sombra
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
    order: 1; // Asegura que la imagen aparezca primero
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
  
  @media (max-width: 768px) {
    order: 2; // Asegura que el contenido aparezca después de la imagen
  }
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
    left: 50%; // Center the bar
    transform: translateX(-50%); // Adjust for centering
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
  text-align: center; // Center the text
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

const Proyecto02 = () => {
  return (
    <ProjectContainer>
      <ProjectContent>
        <ProjectTitle>E-comerce</ProjectTitle>
        <ProjectDescription>
          Una aplicación web diseñada para facilitar cálculos esenciales en el
          ámbito de la electrónica. Esta herramienta permite a estudiantes,
          ingenieros y entusiastas realizar cálculos.
        </ProjectDescription>

        <TechList>
          <TechItem>React</TechItem>
          <TechItem>Node.js</TechItem>
          <TechItem>MySql</TechItem>
          <TechItem>JavaScript</TechItem>
          <TechItem>Styled Components</TechItem>
        </TechList>

        {/* Iconos sociales */}
        <SocialIcons>
          <a
            href="https://github.com/dart01/E-comerce"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.figma.com/design/gmRbNyDPyWXNhDqyGzljxC/e-comerce?node-id=10-94&t=mOuGadjZvpuuaalA-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFigma />
          </a>
        </SocialIcons>
      </ProjectContent>

      <ProjectImageContainer>
        <ProjectImage src={plantilla} alt="Descripción del proyecto" />
      </ProjectImageContainer>
    </ProjectContainer>
  );
};

export default Proyecto02;
