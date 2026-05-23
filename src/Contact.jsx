import styled from "styled-components";
import { FaEnvelope, FaLinkedin, FaGithub, FaBehance } from "react-icons/fa";

const ContactSection = styled.section`
  max-width: 700px;
  margin: 4rem auto;
  padding: 2rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: rgb(243, 249, 248);
  margin-bottom: 1rem;
  position: relative;

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

const Subtitle = styled.p`
  color: rgba(255, 255, 255, 0.5);
  font-size: 1.1rem;
  margin: 2rem 0 3rem;
`;

const LinksGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  margin: 0 auto;
`;

const ContactLink = styled.a`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem 1.5rem;
  background: #1e1e1e;
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgb(61, 207, 182);
    color: rgb(61, 207, 182);
    transform: translateX(6px);
  }

  svg {
    width: 22px;
    height: 22px;
    flex-shrink: 0;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <SectionTitle>Contacto</SectionTitle>
      <Subtitle>¿Tienes un proyecto en mente? Hablemos.</Subtitle>

      <LinksGrid>
        <ContactLink href="mailto:diegoan1624@gmail.com">
          <FaEnvelope />
          diegoan1624@gmail.com
        </ContactLink>
        <ContactLink href="https://www.linkedin.com/in/diego-ria%C3%B1o-329748277/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          LinkedIn
        </ContactLink>
        <ContactLink href="https://github.com/dart01" target="_blank" rel="noopener noreferrer">
          <FaGithub />
          GitHub
        </ContactLink>
        <ContactLink href="https://www.behance.net/diegoriao3" target="_blank" rel="noopener noreferrer">
          <FaBehance />
          Behance
        </ContactLink>
      </LinksGrid>
    </ContactSection>
  );
};

export default Contact;