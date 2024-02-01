import React from "react";
import styles from "./MainComponent.module.css";
const MainComponent = ({
  headerFontFamily,

  heading,

  classes,
}) => {
  return (
    <div className={styles.mainWrapper}>
      <div className={styles.wrapper}>
        <h2 className={styles.heading} style={{ fontFamily: headerFontFamily }}>
          {heading}
        </h2>
        <div className={styles.classessContainer}>
          {classes.map((classes, i) => (
            <div className={styles.class} key={i}>
              <h3 className={styles.day}>{classes.day}</h3>
              <div className={styles.textContainer}>
                <h3 className={styles.title}>{classes.title}</h3>
                <p className={styles.info}>{classes.info}</p>
              </div>{" "}
              <div className={styles.icon}>{classes.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
