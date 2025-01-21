
import fondo from './imagenes/fondo.png'; // Asegúrate de que la ruta sea correcta
import githubIcon from './imagenes/github.png'; // Asegúrate de que la ruta sea correcta
import linkedinIcon from './imagenes/linkedin.png'; // Asegúrate de que la ruta sea correcta

const Intro = () => {
    const introStyle = {
        backgroundImage: `url(${fondo})`,
        backgroundSize: 'cover', // Asegura que la imagen cubra todo el div
        backgroundPosition: 'center', // Centra la imagen
    };

    return (
        <div className="intro-background" style={introStyle}>
            <h1>Diego riaño</h1>
            <h2>Ingeniero Mecatrónico</h2>
            <div className="social-icons">
                <img src={githubIcon} alt="GitHub" />
                <img src={linkedinIcon} alt="LinkedIn" />
            </div>
        </div>
    );
};

export default Intro;