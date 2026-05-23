import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const ProjectContainer = styled.article`
  display: flex;
  flex-direction: ${({ $imageLeft }) => ($imageLeft ? "row" : "row-reverse")};
  gap: 2rem;
  max-width: 1200px;
  margin: 2rem auto;
  padding: 2rem;
  background: #1e1e1e;
  border-radius: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectTitle = styled.h3`
  font-size: 2rem;
  color: white;
  margin-bottom: 1.5rem;
  position: relative;
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

const ProjectDescription = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const TechList = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  justify-content: center;
`;

const TechItem = styled.span`
  background-color: #f0f0f0;
  color: #333;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1.5rem;

  & a {
    color: white;
    transition: color 0.3s ease;
    &:hover {
      color: rgb(61, 207, 182);
    }
  }

  & svg {
    width: 40px;
    height: 40px;
    cursor: pointer;
  }
`;

const ProjectCard = ({ title, description, image, imageLeft, tech, links }) => {
  return (
    <ProjectContainer $imageLeft={imageLeft}>
      <ProjectImageContainer>
        <ProjectImage src={image} alt={title} />
      </ProjectImageContainer>

      <ProjectContent>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>

        <TechList>
          {tech.map((item) => (
            <TechItem key={item}>{item}</TechItem>
          ))}
        </TechList>

        <SocialIcons>
          {links.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
              {link.icon}
            </a>
          ))}
        </SocialIcons>
      </ProjectContent>
    </ProjectContainer>
  );
};

export default ProjectCard;