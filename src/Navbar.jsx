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

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <NavbarContainer isScrolled={isScrolled}>
            <NavContent>
                <NavList>
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