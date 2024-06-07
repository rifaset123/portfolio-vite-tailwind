import Tilt from 'react-parallax-tilt';

const App = () => {
  return (
    <div className="app">
      <Tilt
        glareEnable={true}
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        perspective={1000}
        glareColor={"rgba(255, 0, 0, 0.5)"} // Adjust glare color and opacity as needed
        className="tilt-background"
      >
        {/* Your background content here */}
        <img
          src="/src/public/me_noBG.png"
          alt="background"
          className="background-image"
        />
      </Tilt>
    </div>
  );
};

export default App;
