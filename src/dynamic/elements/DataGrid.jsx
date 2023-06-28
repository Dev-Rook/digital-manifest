import React from "react";

// Styles Import:
import styles from "../../styles/dynamic/dataGrid.module.scss";

const DataGrid = ({ item }) => {
  return (
    <div className="section">
      <div className={styles.panel}></div>
      <div className={styles.dataGrid}>
        <div className={styles.legend}>
          <p className={styles.legendText}>Sender</p>
          <p className={styles.legendText}>Receiver</p>
          <p className={styles.legendText}>Items</p>
          <p className={styles.legendText}>Waybill</p>
          <p className={styles.legendText}>KG</p>
          <p className={styles.legendText}>CBM</p>
        </div>
        {item?.shipments?.map((value) => {
          return (
            <div className={styles.shipment}>
              <p>{value.sender.name}</p>
              <p>{value.receiver.name}</p>
              <p>
                {value.items?.map((it) => {
                  return <>{it.type}</>;
                })}
              </p>
              <p>{value.waybill}</p>
              <p>{value.metrics.kg}</p>
              <p>{value.metrics.cbm}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DataGrid;
