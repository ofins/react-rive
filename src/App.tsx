import { useState } from "react";
import "./App.css";
import { useRive } from "@rive-app/react-canvas";

function App() {
  // Reference for the vehicles animation
  const [isPlaying, setIsPlaying] = useState(true);
  const [animationText, setAnimationText] = useState("");
  const { rive, RiveComponent: RiveComponentPlayback } = useRive({
    src: "truck.riv",
    stateMachines: "drive",
    artboard: "Truck",
    autoplay: true,
    onPause: () => {
      setAnimationText("Animation paused!");
    },
    onPlay: () => {
      setAnimationText("Animation playing");
    },
  });
  const togglePlaying = () => {
    if (isPlaying) {
      rive?.pause();
      setIsPlaying(false);
    } else {
      rive?.play();
      setIsPlaying(true);
    }
  };

  // For the weather animation
  const { RiveComponent: WeatherComponent } = useRive({
    src: "weather.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
  });

  return (
    <>
      <h3>Interactive React + Rive DEMO</h3>

      <div className="animation-container">
        <div className="animation-box">
          <h2>Weather Animation</h2>
          <WeatherComponent style={{ width: 300, height: 300 }} />
        </div>

        <div className="animation-box">
          <h2>Vehicle Animation</h2>
          <RiveComponentPlayback style={{ width: 300, height: 200 }} />
          <p>{animationText}</p>
          <button onClick={togglePlaying}>
            {isPlaying ? "Pause" : "Play"}
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
