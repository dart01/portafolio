import plantilla from './imagenes/plantilla1.jpg';

const Proyecto01 = () => {
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
            <h1>Proyecto 01</h1>
            <div style={containerStyle}>
                <div style={plantillaStyle}></div>
                <div style={secondDivStyle}>
                     <h2>Contenido del Segundo Div</h2>
                     <p>Lorem ipsum dolor sit amet consectetur  .</p>
                </div>
            </div>
            
        </>
    );
};

export default Proyecto01;
