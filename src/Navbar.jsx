// src/components/Navbar.js

import styled from 'styled-components';

// Estilos para la barra de navegación
const NavbarContainer = styled.nav`
    position: sticky; /* Hace que la barra sea sticky */
    top: 0; /* Se pega en la parte superior */
    width: 100%; /* Ocupa todo el ancho */
    background-color: #333; /* Color de fondo */
    color: white; /* Color del texto */
    padding: 1rem 2rem; /* Espaciado interno */
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2); /* Sombra para efecto flotante */
    z-index: 1000; /* Asegura que esté por encima de otros elementos */
`;

const NavList = styled.ul`
    list-style: none; /* Quita los puntos de la lista */
    display: flex; /* Distribuye los elementos horizontalmente */
    justify-content: space-around; /* Espacio entre elementos */
    margin: 0;
    padding: 0;
`;

const NavItem = styled.li`
    margin: 0 1rem; /* Espaciado entre elementos */
`;

const NavLink = styled.a`
    color: white; /* Color del texto */
    text-decoration: none; /* Quita el subrayado */
    font-size: 1.2rem; /* Tamaño del texto */
    transition: color 0.3s ease; /* Transición suave al hacer hover */

    &:hover {
        color: #61dafb; /* Cambia el color al hacer hover */
    }
`;

// Componente de la barra de navegación
const Navbar = () => {
    return (
        <NavbarContainer>
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
        </NavbarContainer>
    );
};

export default Navbar;