'use client'
import { useRef } from 'react';
import styles from './page.module.css'
import { motion, useInView } from 'framer-motion';

const phrases = [
  "It is a long established fact",
  "that a reader will be distracted",
  "by the readable content of a page",
  "when looking at its layout."
]

export default function Home() {

  return (
    <div className={styles.container}>
      <MaskText/>
      <MaskText/>
      <MaskText/>
      <MaskText/>
    </div>
  )
}

export function MaskText() {
  const ref = useRef(null)
  const inView = useInView(ref, {once: true, amount: 0.75})

  const animation = {
    initial: {y: "100%"},
    enter: i => ({y: "0", transition: {duration: 0.75, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
  }

  return(
    <div ref={ref} className={styles.body}>
      {
        phrases.map( (phrase, index) => {
          return <div key={index} className={styles.lineMask}>
            <motion.p custom={index} variants={animation} initial="initial" animate={inView ? "enter" : ""}>{phrase}</motion.p>
          </div>
        })
      }
    </div>
  )
}