import styled from 'styled-components';
import fondo from './imagenes/fondo.jpg';
import { FaGithub, FaLinkedin, FaFigma } from 'react-icons/fa';

const IntroContainer = styled.div`
    background-image: url(${fondo});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 1;
    
    &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: -1;
    }
`;



const ContactButton = styled.a`
    margin-top: 30px;
    padding: 12px 30px;
    background-color: white;
    color: #333;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    &:hover {
        background-color: #333;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }
`;

const CVButton = styled.a`
    margin-top: 30px;
    padding: 12px 30px;
    background-color: white;
    color: #333;
    text-decoration: none;
    border-radius: 25px;
    font-weight: 600;
    transition: all 0.3s ease;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    
    &:hover {
        background-color: #333;
        color: white;
        transform: translateY(-2px);
        box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
    }
`;

const SocialIcons = styled.div`
    display: flex;
    gap: 20px;
    margin-top: 20px;

    & svg {
        color: white; // Cambia el color de los iconos a blanco
        width: 40px;
        height: 40px;
        cursor: pointer;
        transition: transform 0.2s ease;

        &:hover {
            transform: scale(1.1);
        }
    }
`;

const Intro = () => {
    return (
        <IntroContainer>
            <h1>Diego Riaño</h1>
            <h2>Ingeniero Mecatrónico</h2>
            <SocialIcons>
                <a href="https://github.com/dart01" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/diego-ria%C3%B1o-329748277/" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                </a>
                <a href="https://www.figma.com/tu-usuario" target="_blank" rel="noopener noreferrer">
                    <FaFigma />
                </a>
            </SocialIcons>
            <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
                <CVButton 
                    href="/path/to/cv.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Descargar CV
                </CVButton>
                <ContactButton 
                    href="/contact" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    Contacta Me
                </ContactButton>
            </div>
        </IntroContainer>
    );
};

export default Intro;
