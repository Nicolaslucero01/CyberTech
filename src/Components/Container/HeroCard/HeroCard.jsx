import React from 'react'
import styles from './HeroCard.module.css'

function HeroCard({img, nombre}) {
  return (
    <div className={styles.containerCard}>
        <img src={img}/>
        <h3>{nombre}</h3>
    </div>
  )
}

export default HeroCard