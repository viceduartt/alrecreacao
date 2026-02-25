import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Links from "./components/Links";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/links" element={<Links />} />
    </Routes>
  );
}

export default App;