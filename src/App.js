import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Home, DetailsPages } from "./pages";
import { Create, Edit, Header, Footer } from "./components";

const App = () => {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/details/:id" element={<DetailsPages />} />
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/edit/:id" element={<Edit />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};
export default App;
