import { useState } from "react";
import { Link } from "react-router-dom";

// Styles Import:
import styles from "../../styles/dynamic/dataGrid.module.scss";

// Json Import:
import legendData from "../../data/legend.json"

const DataGrid = ({ item }) => {
  const [legend, setLegend] = useState(legendData);
  return (
    <div className="section">
      <div className={styles.panel}></div>
      <div className={styles.dataGrid}>
        <div className={styles.legend}>
          {legend?.map((param) => {
            return (
              <p className={styles.legendText} key={param.id}>
                {param.name}
              </p>
            );
          })}
        </div>
        {item?.shipments?.map((value) => {
          return (
            <Link to={`/shipment/${value.shipment_id}`} className={styles.link}>
              <div className={styles.shipment}>
                <p className={styles.shipmentText}>{value.sender.name}</p>
                <p className={styles.shipmentText}>{value.receiver.name}</p>
                <p className={styles.shipmentText}>{value.items.ammount}</p>
                <p className={styles.shipmentText}>
                  {value.items?.map((it) => {
                    return <>{it.type}</>;
                  })}
                </p>
                <p className={styles.shipmentText}>{value.waybill}</p>
                <p className={styles.shipmentText}>{value.metrics.kg}</p>
                <p className={styles.shipmentText}>{value.metrics.cbm}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default DataGrid;
