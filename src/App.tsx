import { ContextProvider } from "./Contexts/contexts";
import Routing from "./Components/Routing";
import "../src/App.css";

function App() {
  return (
    <div>
      <ContextProvider>
        <Routing />
      </ContextProvider>
    </div>
  );
}

export default App;
