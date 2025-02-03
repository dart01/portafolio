import plantilla from './imagenes/plantilla1.jpg';

const Proyecto03 = () => {
    const containerStyle = {
        display: 'flex',
        justifyContent: 'space-between', // Space between the divs
        height: '100vh', // Full height
    };

    const plantillaStyle = {
        backgroundImage: `url(${plantilla})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '50%', // Each div takes half the width
        padding: '2%', // Add padding
        boxSizing: 'border-box', // Ensure padding is included in the width
    };

    const secondDivStyle = {
        backgroundColor: 'blue', // Example background for the second div
        width: '50%', // Each div takes half the width
        display: 'block', // Stack content vertically
        alignItems: 'center', // Center vertically
        justifyContent: 'center', // Center horizontally
        color: 'white', // Text color
        fontSize: '24px', // Font size
    };

    return (
        <>
            <h1>Proyecto 03</h1>
            <div style={containerStyle}>
                <div style={plantillaStyle}></div>
                <div style={secondDivStyle}>
                     <h2>Proyecto 03</h2>
                     <p>Descripción breve del proyecto 03.</p>
                     <a href="https://github.com/yourusername/proyecto03" target="_blank" rel="noopener noreferrer">
                         <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg" alt="GitHub" width="20" height="20"/> GitHub
                     </a>
                     <p>URL: <a href="https://yourprojecturl.com">yourprojecturl.com</a></p>
                </div>
            </div>
        </>
    );
};

export default Proyecto03;
