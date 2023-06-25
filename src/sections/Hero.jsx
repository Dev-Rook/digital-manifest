// Styles Import:
import "../styles/global.scss";
import styles from "../styles/sec-styles/hero.module.scss";

const Hero = () => {
  return (
    <div className="section">
      <div className={styles.hero}>
        <div className={styles.content_container}>
          <h1 className={styles.title}>Digital Manifest</h1>
          <p className={styles.text}>
            Digital Manifest is a React + Firebase web app that conceptualizes a
            tipical shipping manifest used by shipping agencies, port authority
            & or cutsoms agencies to process imported cargo. With this platform,
            one has the abiity to sign in and create manifests or shimpents
            inside manifests, along with the ability to search/query and
            dynamically route to a spicific shipment to see all info.
          </p>
          <div className={styles.box_container}>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
            <div className={styles.box}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
