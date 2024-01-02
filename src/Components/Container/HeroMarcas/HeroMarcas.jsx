import React from 'react'
import HeroCard from '../HeroCard/HeroCard'
import nvidia from '../../../Assets/nividiia.jpg'
import styles from './heromarcas.module.css'
import amd from '../../../Assets/amd.jpg'
import intel from '../../../Assets/intel.jpg'
import xbox from '../../../Assets/xbox.jpg'



function HeroMarcas() {
  return (
    <div className={styles.container}>
        <HeroCard img={nvidia} nombre={'NVIDIA'}/>
        <HeroCard img={amd} nombre={'AMD'}/>
        <HeroCard img={intel} nombre={'INTEL'}/>
        <HeroCard img={xbox} nombre={'XBOX'}/>      
    </div>
  )
}

export default HeroMarcas