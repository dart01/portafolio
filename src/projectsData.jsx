import robotic from "./imagenes/robotic.png";
import taller from "./imagenes/taller.png";
import ma from "./imagenes/ma.png";
import shopmind from "./imagenes/shopmind.png";
import askdocs from "./imagenes/askdocs.png";
import vision from "./imagenes/vision.png";
import { FaGithub, FaFigma, FaBehance, FaLink } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: " Robotic Arm Digital Twin & AI Anomaly Detector",
    description:
      "Gemelo Digital del Brazo Robótico! Este proyecto es un ecosistema completo que simula la física, cinemática y variables eléctricas de un brazo robótico industrial en tiempo real.",
    image: robotic,
    imageLeft: true,
    tech: ["React", "Three.js ", "Tailwind", "Recharts", "Vite", "Python", "Scikit-Learn", "Pandas", "Joblib", "Supabase", "Vercel", "Render.com"],
    links: [
      { icon: <FaGithub />, url: "https://github.com/dart01/RoboTwin.AI#-robotic-arm-digital-twin--ai-anomaly-detector" },
      { icon: <FaLink />, url: "robo-twin-ai.vercel.app" },
    ],
  },
  {
    id: 2,
    title: "Servi Land Rover",
    description:
      "Landing page para taller automotriz donde se muestran y ofrecen servicios para facilitar a posibles clientes comunicarse.",
    image: taller,
    imageLeft: false,
    tech: ["React", "JavaScript", "Vercel", "Vite", "Styled Components"],
    links: [
      { icon: <FaGithub />, url: "https://github.com/dart01/Servi-Land-Rover" },

      { icon: <FaLink />, url: "https://servi-land-rover.vercel.app/" },
    ],
  },
  {
    id: 3,
    title: "E-commerce",
    description:
      "Tienda en línea con catálogo de productos, carrito de compras y gestión de pedidos. Conectada a base de datos MySQL con Node.js en el backend.",
    image: ma,
    imageLeft: true,
    tech: ["React", "Node.js", "MySQL", "JavaScript", "Styled Components"],
    links: [
      { icon: <FaGithub />, url: "https://github.com/dart01/E-comerce" },
      { icon: <FaFigma />, url: "https://www.figma.com/design/gmRbNyDPyWXNhDqyGzljxC/e-comerce?node-id=10-94" },
      { icon: <FaBehance />, url: "https://www.behance.net/diegoriao3" },
      { icon: <FaLink />, url: "https://e-comerce-rust.vercel.app/" },
    ],
  },
  {
    id: 4,
    title: "ShopMind - Motor recomendador de productos",
    description:
      "Construí desde cero el mismo sistema que usa Amazon para recomendarte productos. Implementé dos algoritmos que se complementan: Collaborative Filtering con ALS (aprende de 2M+ reseñas reales de usuarios) y Embeddings Semánticos con sentence-transformers para resolver el problema del arranque en frío.",
    image: shopmind,
    imageLeft: false,
    tech: ["Python", "pandas", "Scipy", "Numpy", "Streamlit", "sklearn", "sentence-transformers", "Hugging Face"],
    links: [
      { icon: <FaGithub />, url: "https://github.com/dart01/calculadora-electronica" },
      { icon: <FaLink />, url: "https://calculadora-electronica.vercel.app/" },
    ],
  },
  {
    id: 5,
    title: "AskDocs - Chatbot que responde preguntas sobre documentos PDF",
    description:
      "Pipeline RAG completo implementado desde cero — sin LangChain — que convierte cualquier PDF en una base de conocimiento consultable. Extrae texto, lo fragmenta con solapamiento inteligente, lo indexa en FAISS con embeddings de 384 dimensiones y consulta Llama 3 vía Groq para responder en lenguaje natural. El sistema nunca alucina: si la respuesta no está en el documento, lo dice.",
    image: askdocs,
    imageLeft: true,
    tech: ["Python", "Faiss", "Numpy", "dotenv", "Groq", "Streamlit", "PyPDF2", "sentence-transformers", "Hugging Face"],
    links: [
      { icon: <FaGithub />, url: "https://github.com/dart01/calculadora-electronica" },
     
      { icon: <FaLink />, url: "https://calculadora-electronica.vercel.app/" },
    ],
  },
  {
    id: 6,
    title: "VisionShop - Clasificador de imágenes con redes neuronales",
    description:
      "Red neuronal CNN entrenada desde cero en PyTorch — sin modelos preentrenados — que clasifica imágenes en 10 categorías con 76% de precisión sobre CIFAR-10. El experimento más valioso fue entrenar la misma arquitectura con 10x menos datos: demostró que más datos supera a más capas. La matriz de confusión reveló exactamente por qué gato y perro son las categorías más difíciles visualmente",
    image: vision,
    imageLeft: false,
    tech: ["Python", "PyTorch", "torchvision", "Scikit-Learn", "Matplotlib ", "Streamlit", "CIFAR-10", "Hugging Face", "3 bloques convolucionales (Conv2D + BatchNorm + MaxPooling)"],
    links: [
      { icon: <FaGithub />, url: "https://github.com/dart01/calculadora-electronica" },
      { icon: <FaFigma />, url: "https://www.figma.com/TU-LINK-REAL" },
      { icon: <FaBehance />, url: "https://www.behance.net/diegoriao3" },
      { icon: <FaLink />, url: "https://calculadora-electronica.vercel.app/" },
    ],
  },
];

export default projects;