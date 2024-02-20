import styles from "./style.module.scss";
import { useState } from "react";
import Nav from "./nav/index";
import {AnimatePresence, motion} from "framer-motion"

export default function Home() {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div onClick={() => setIsActive(!isActive)} className={styles.button}>
        <div
          className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}
        ></div>
      </div>
      <AnimatePresence mode="wait">
         { isActive && <Nav /> } 
      </AnimatePresence>

    </>
  );
}

// export this to layout main index
