import { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/actions.module.scss";

// Json Import:
import actionsData from "../data/actions.json";

const Actions = () => {
  const [actions, setActions] = useState(actionsData);
  const img1 = ``;
  const img2 = ``;
  return (
    <div className="section">
      <p className="sectionTitle">Actions</p>
      <div className={styles.contentContainer}>
        {actions?.map((item) => {
          return (
            <Link to={item.link} key={item.id}>
              <div className={styles.actionBox}>
                <img src={item.img} alt="" className={styles.bgImg} />
                <p className={styles.title}>{item.title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Actions;
