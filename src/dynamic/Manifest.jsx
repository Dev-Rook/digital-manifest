import { useState } from "react";

// Styles Import:

// Json Import:
import manifestData from "../data/manifest";

// Components Import:
import Head from "./elements/Head";
import DataGrid from "./elements/DataGrid";

const Manifest = () => {
  const [manifest, setManisfest] = useState(manifestData);

  return (
    <div className="page">
      {manifest?.map((item) => {
        return (
          <>
            <Head item={item} />
            <p className="pcs_count">{item.pcs_count} PCS</p>
            <DataGrid item={item} />
          </>
        );
      })}
    </div>
  );
};

export default Manifest;
