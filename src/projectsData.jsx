import proyecto1 from "./imagenes/proyecto1.jpg";
import tienda from "./imagenes/tienda.jpg";
import calculadora from "./imagenes/calculadora.jpg";
import { FaGithub, FaFigma, FaBehance, FaLink } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "Servi Land Rover",
    description:
      "Landing page para taller automotriz donde se muestran y ofrecen servicios para facilitar a posibles clientes comunicarse.",
    image: proyecto1,
    imageLeft: true,
    tech: ["React", "JavaScript", "Vercel", "Vite", "Styled Components"],
    links: [
      { icon: <FaGithub />, url: "https://github.com/dart01/Servi-Land-Rover" },
      { icon: <FaFigma />, url: "https://www.figma.com/design/7svbo4l4k3JQIlNflSF8aa/Servi-Land-Rover?node-id=0-1" },
      { icon: <FaBehance />, url: "https://www.behance.net/diegoriao3" },
      { icon: <FaLink />, url: "https://servi-land-rover.vercel.app/" },
    ],
  },
  {
    id: 2,
    title: "E-commerce",
    description:
      "Tienda en línea con catálogo de productos, carrito de compras y gestión de pedidos. Conectada a base de datos MySQL con Node.js en el backend.",
    image: tienda,
    imageLeft: false,
    tech: ["React", "Node.js", "MySQL", "JavaScript", "Styled Components"],
    links: [
      { icon: <FaGithub />, url: "https://github.com/dart01/E-comerce" },
      { icon: <FaFigma />, url: "https://www.figma.com/design/gmRbNyDPyWXNhDqyGzljxC/e-comerce?node-id=10-94" },
      { icon: <FaBehance />, url: "https://www.behance.net/diegoriao3" },
      { icon: <FaLink />, url: "https://e-comerce-rust.vercel.app/" },
    ],
  },
  {
    id: 3,
    title: "Calculadora electrónica",
    description:
      "Aplicación web para facilitar cálculos esenciales en electrónica. Permite a estudiantes e ingenieros calcular resistencias, voltajes y corrientes.",
    image: calculadora,
    imageLeft: true,
    tech: ["React", "JavaScript", "Vercel", "Vite", "Styled Components"],
    links: [
      { icon: <FaGithub />, url: "https://github.com/dart01/calculadora-electronica" },
      { icon: <FaFigma />, url: "https://www.figma.com/TU-LINK-REAL" },
      { icon: <FaBehance />, url: "https://www.behance.net/diegoriao3" },
      { icon: <FaLink />, url: "https://calculadora-electronica.vercel.app/" },
    ],
  },
];

export default projects;