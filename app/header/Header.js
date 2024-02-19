
import React from "react";
import styles from "./style.module.scss";
import { useState } from "react";

export default function header() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div onClick={()=> setIsActive(!isActive)} className={styles.button}>
              <div className={`${styles.burger} ${isActive ? styles.burgerActive:""}` }>
                  
        </div>
      </div>
    </>
  );
}
