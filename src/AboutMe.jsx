import styled from 'styled-components';
import xd from './imagenes/xd.png';

const AboutMeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  text-align: center;
  
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: rgb(243,249,248);
  margin-bottom: 2rem;
  position: relative;
  display: inline-block;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color:rgb(61, 207, 182);
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6); /* Cambiado a blanco con 60% de opacidad */
  max-width: 800px;
  margin: 0 auto 3rem;
`;

const TechnologyGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;


  }
`;

const TechnologyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: #1E1E1E;
  border-radius: 100px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 100px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5); 
  &:hover {
    transform: translateY(-5px);
    
  }

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;
  }

  span {
    font-size: 1rem;
    color: white;
    font-weight: 500;
  }
`;

const AboutMe = () => {
  const technologies = [
    { name: 'React', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg' },
    { name: 'JavaScript', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg' },
    { name: 'CSS', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg' },
    { name: 'Python', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg' },
    { name: 'C++', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg' },
    { name: 'Git', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg' },
    { name: 'HTML', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg' },
    { name: 'Figma', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/figma/figma-original.svg' },
    { name: 'Adobe XD', icon: xd },
    { name: 'Photoshop', icon: 'https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg' },
    { name: 'Illustrator', icon: 'https://raw.githubusercontent.com/devicons/devicon/master/icons/illustrator/illustrator-line.svg' },
  ];

  return (
    <AboutMeContainer id="about">
      <SectionTitle>Sobre Mí</SectionTitle>
      <Description>
        ¡¡Hola! me llamo Diego Riaño, ingeniero mecatrónico 
        apasionado por crear soluciones tecnológicas innovadoras. 
        Combino programación en con React, Python, JavaScript y 
        MySQL con diseño de experiencias de usuario (UI/UX) usando 
        herramientas como Figma, Adobe XD, Photoshop e Illustrator. 
        Mi enfoque es simple: entender las necesidades del usuario 
        y transformarlas en aplicaciones funcionales, visualmente 
        atractivas y fáciles de usar. Disfruto fusionar lo técnico 
        con lo creativo para construir experiencias digitales que 
        marquen la diferencia. ¡Echa un vistazo a mi portafolio y 
        veamos cómo puedo ayudarte a llevar tus ideas al siguiente 
        nivel!
      </Description>
      
      <SectionTitle>🛠 Tecnologías</SectionTitle>
      <TechnologyGrid>
        {technologies.map((tech, index) => (
          <TechnologyItem key={index}>
            <img src={tech.icon} alt={tech.name} />
            <span>{tech.name}</span>
          </TechnologyItem>
        ))}
      </TechnologyGrid>
      
    </AboutMeContainer>
  );
};

export default AboutMe;