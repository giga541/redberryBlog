import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddBlog from "./components/addBlog/AddBlog";
import Homepage from "./components/homepage/Homepage";
import "./App.css";
import SelectedBlog from "./components/homepage/SelectedBlog";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/addBlog" element={<AddBlog />} />
          <Route path="/blogs/:id" element={<SelectedBlog />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
