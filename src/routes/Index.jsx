// Styles Import:
import "../styles/global.scss";

// Section Import:
import Hero from "../sections/Hero";
import ManifestGrid from "../sections/ManifestGrid";

const Index = () => {
  return (
    <div className="page">
      <Hero />
      <ManifestGrid />
    </div>
  );
};

export default Index;
