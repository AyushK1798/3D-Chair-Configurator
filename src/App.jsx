import { Canvas } from "@react-three/fiber";
import Preview from "./components/Preview";
import Configurator from "./components/Configurator";

function App() {
  return (
    <div className="App">
      <div style={{width:"75%"}}>
        <Canvas>
          <Preview />
        </Canvas>
      </div>
      <Configurator />
    </div>
  );
}

export default App;
