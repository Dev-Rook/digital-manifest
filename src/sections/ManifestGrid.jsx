import { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/grid.module.scss";

// Hooks Import:

// Firebase 🔥:

// Json Import:
import manifestData from "../data/manifests.json";

const ManifestGrid = () => {
  const [data, setData] = useState(manifestData);
  const [date, setDate] = useState(manifestData.date);
  return (
    <div className="section">
      <p className="sectionTitle">Manifests</p>
      <div className={styles.contentCotainer}>
        {data?.map((item) => {
          return (
            <Link to={`/manifest/${item.id}`} key={item.id}>
              <div className={styles.card}>
                <div className={styles.imgContainer}></div>
                <div className={styles.details}>
                  <div className={styles.number_pcs}>
                    <p className={styles.manifest}>Manifest: {item?.number}</p>
                    <p className={styles.pcs}>PCS: {item?.pcs_count}</p>
                  </div>
                  <div className={styles.d_c_b}>
                    <p className={styles.text}>
                      Dates: {item?.date[0]} {item?.date[1]}
                    </p>
                    <p className={styles.text}>Cont: {item?.cont_number}</p>
                    <p className={styles.text}>Master BL: {item?.bl_number}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ManifestGrid;
