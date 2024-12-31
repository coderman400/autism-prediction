import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Quiz from "./pages/Quiz";
import Footer from "./components/Footer";
import Result from "./pages/Result"; 
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
