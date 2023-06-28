import React from "react";

// Styles Import:
import styles from "../../styles/dynamic/head.module.scss";

const Head = ({ item }) => {
  return (
    <div className="top section">
      <div className={styles.head}>
        <p className="sectionTitle">Manifest {item.number}</p>
        <p className="smallText">
          {item.date?.map((dt) => {
            return <p className="">{dt}</p>;
          })}
        </p>
        <p className="smallText">Container Number: {item.cont_number}</p>
        <p className="smallText">BOL: {item.bl_number}</p>
      </div>
    </div>
  );
};

export default Head;
