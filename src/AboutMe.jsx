import styled from 'styled-components';

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
  color: rgb(243,249,248);;
  max-width: 800px;
  margin: 0 auto 3rem;
`;

const TechnologyGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  margin-top: 2rem;
`;

const TechnologyItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  width: 120px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  img {
    width: 50px;
    height: 50px;
    margin-bottom: 1rem;
    transition: transform 0.3s ease;
  }

  span {
    font-size: 1rem;
    color: #333;
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
  ];

  return (
    <AboutMeContainer>
      <SectionTitle>Sobre Mí</SectionTitle>
      <Description>
        ¡Hola! Soy Diego Riaño, un ingeniero mecatrónico apasionado por el desarrollo de soluciones tecnológicas innovadoras.
        Me especializo en crear aplicaciones web modernas y eficientes, combinando mis conocimientos en programación con mi formación en ingeniería.
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