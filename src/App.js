import "./App.css";
import { Home } from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Btn } from "./components/Btn";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Home />
      <Btn />
    </div>
  );
}

export default App;
