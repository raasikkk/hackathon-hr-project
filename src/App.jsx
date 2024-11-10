import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResume from "./pages/SearchResume";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search-resume" element={<SearchResume />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
