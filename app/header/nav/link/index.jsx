import styles from './style.module.scss'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { slide } from '../../anim'

export default function index({data}) {
  return (
      <motion.div  variants={slide} animate="enter" initial="initial" exit="exit" className={styles.link}>
          <Link href={data.href}>
              {data.title}
        </Link>
      </motion.div>
  )
}
 