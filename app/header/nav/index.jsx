import styles from "./style.module.scss";
import Link from "./link/index";
import { motion } from "framer-motion";


import { menuSlide } from "../anim";


export default function index() {
  const navItems = [
    {
      title: "Home",
      href: "#",
    },
    {
      title: "ABOUT",
      href: "#about",
    },
    {
      title: "Projects",
      href: "#projects",
    },
    {
      title: "Skills",
      href: "#skills",
    },
    {
      title: "Expreience",
      href: "#experience",
    },
  ];
  return (
    <motion.div variants={menuSlide} animate="enter" initial="initial" exit="exit" className={styles.menu}>
      <div className={styles.body}>
        <div className={styles.nav}>
          <div className={styles.header}>
            <p> Navigation</p>
          </div>
          {navItems.map((item, index) => {
            return <Link data={{ ...item, index }} />;
          })}
        </div>
      </div>
    </motion.div>
  );
}
