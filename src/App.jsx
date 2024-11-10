import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchResume from "./pages/SearchResume";
import NotFound from "./pages/NotFound";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import axios from "axios";

// Global Axios configuration
axios.defaults.withCredentials = true;

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/search-resume"
          element={
            <ProtectedRoute>
              <SearchResume />
            </ProtectedRoute>
          }
        />
        <Route path="logged-in" element={<SearchResume />} />
        {/* <Route path="/search-resume" element={} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
