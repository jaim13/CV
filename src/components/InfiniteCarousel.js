// InfiniteCarousel.js
import React from "react";
import styles from "./InfiniteCarousel.module.css";

export default function InfiniteCarousel() {
  return (
    <div className={styles.infiniteCarousel}>
      <div className={`Logos ${styles.Logos}`}>
        <div className={`logos-slide ${styles["logos-slide"]}`}>
          <img src="/imgs/pythonlog.png" />
          <img src="/imgs/reactlog.png" />
          <img src="/imgs/sqllog.png" />
          <img src="/imgs/nodelog.png" />
          <img src="/imgs/ubuntulog.png" />
          <img src="/imgs/jslogo.png" />
          {/* Duplicamos el contenido */}
          <img src="/imgs/pythonlog.png" />
          <img src="/imgs/reactlog.png" />
          <img src="/imgs/sqllog.png" />
          <img src="/imgs/nodelog.png" />
          <img src="/imgs/ubuntulog.png" />
          <img src="/imgs/jslogo.png" />
        </div>
      </div>
    </div>
  );
}