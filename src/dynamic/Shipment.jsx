import { useState } from "react";

// Styles Import:

// Json Import:
import manifestData from "../data/manifest";

// Components Import:
import Head from "./elements/Head";

const Shipment = () => {
  const [manifest, setManisfest] = useState(manifestData);

  return (
    <div className="page">
      {manifest?.map((item) => {
        return (
          <>
            <Head item={item} />
          </>
        );
      })}
    </div>
  );
};

export default Shipment;
