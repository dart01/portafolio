import { useEffect, useState } from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
    position: sticky;
    top: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    border-radius: 50px;
    background-color: ${({ isScrolled }) => 
        isScrolled ? '#rgbh(31, 27, 36, 1)' : '#1F1B24'};
    backdrop-filter: blur(5px);
    transition: all 0.3s ease;
    z-index: 1000;
    padding: 1rem 0;
`;

const NavContent = styled.div`
    width: 90%;
    max-width: 1200px;
    display: flex;
    justify-content: flex-end;
`;

const NavList = styled.ul`
    list-style: none;
    display: flex;
    gap: 2rem;
    margin: 0;
    padding: 0;

     @media (max-width: 768px) {
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; // Muestra u oculta la lista
        flex-direction: column; // Cambia a columna en pantallas pequeñas
        position: absolute; // Posiciona la lista
        top: 60px; // Ajusta según la altura de la barra
        left: 0;
        right: 0;
        background-color: #1F1B24; // Fondo para el menú
        padding: 1rem 0; // Espaciado
    }           
`;

const NavItem = styled.li`
    transition: transform 0.2s ease;
    
    &:hover {
        transform: translateY(-2px);
    }
`;

const NavLink = styled.a`
    color: rgb(243,249,248);
    text-decoration: none;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    transition: all 0.3s ease;

    &:hover {
        background-color: rgb(61, 207, 182);
        border-radius: 50px;
    }
`;

const Hamburger = styled.div`
    display: none; // Oculta por defecto

    @media (max-width: 768px) {
        display: flex; // Muestra en pantallas pequeñas
        flex-direction: column;
        cursor: pointer;
    }

    div {
        width: 30px;
        height: 3px;
        background-color: rgb(243,249,248);
        margin: 4px 0; // Espaciado entre las líneas
        transition: all 0.3s ease;
    }
`;

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // Estado para el menú

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Alterna el estado del menú
    };

    return (
        <NavbarContainer isScrolled={isScrolled}>
            <NavContent>
                <Hamburger onClick={toggleMenu}>
                    <div />
                    <div />
                    <div />
                </Hamburger>
                <NavList isOpen={isOpen}>
                    <NavItem>
                        <NavLink href="#home">Inicio</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#about">Sobre Mí</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#projects">Proyectos</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#contact">Contacto</NavLink>
                    </NavItem>
                </NavList>
            </NavContent>
        </NavbarContainer>
    );
};

export default Navbar;