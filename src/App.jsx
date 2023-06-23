import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components Import:
import Nav from "./components/Nav";
import Footer from "./components/Footer";

// Routes Import:
import Index from "./routes/Index";
import Manifests from "./routes/Manifests";
import Login from "./routes/Login";
import Error from "./routes/Error";

// Dynamic Routes Import:
import Manifest from "./dynamic/Manifest";
import Shipment from "./dynamic/Shipment";

const App = () => {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/manifests" element={<Manifests />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
        {/* Dynamic Routes */}
        <Route path="/manifest/:id" element={<Manifest />} />
        <Route path="/shipment/:id" element={<Shipment />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
