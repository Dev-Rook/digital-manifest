// Styles Import:
import "../styles/global.scss";

// Section Import:
import Hero from "../sections/Hero";
import ManifestGrid from "../sections/ManifestGrid";
import Actions from "../sections/Actions";

const Index = () => {
  return (
    <div className="page">
      <Hero />
      <ManifestGrid />
      <Actions />
    </div>
  );
};

export default Index;
