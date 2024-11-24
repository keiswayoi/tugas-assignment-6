import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages2/Home";
import MovieDetail from "./pages2/MovieDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header title="Show your favorite movies" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
