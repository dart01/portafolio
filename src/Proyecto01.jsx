import styled from 'styled-components';
import plantilla from './imagenes/plantilla1.jpg';

const ProjectContainer = styled.article`
  display: flex;
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: white;
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
  min-height: 300px;
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
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  color: rgb(22, 22, 22);
  margin-bottom: 1.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background-color:rgb(61, 207, 182);
  }
`;

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
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

const Proyecto01 = () => {
  return (
    <ProjectContainer>
      <ProjectImageContainer>
        <ProjectImage 
          src={plantilla} 
          alt="Descripción del proyecto" 
        />
      </ProjectImageContainer>
      
      <ProjectContent>
        <ProjectTitle>Servi Land Rover</ProjectTitle>
        <ProjectDescription>
          Descripción detallada del proyecto. Aquí puedes incluir los objetivos, 
          tecnologías utilizadas y los resultados obtenidos. Ejemplo: 
          Aplicación web desarrollada con React y Node.js para la gestión de tareas 
          en equipo, implementando autenticación JWT y base de datos MongoDB.
        </ProjectDescription>
        
        <TechList>
          <TechItem>React</TechItem>
          <TechItem>Node.js</TechItem>
          <TechItem>MongoDB</TechItem>
          <TechItem>JWT</TechItem>
          <TechItem>Styled Components</TechItem>
        </TechList>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default Proyecto01;