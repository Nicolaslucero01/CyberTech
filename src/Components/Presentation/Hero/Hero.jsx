import React from 'react';
import styles from './Hero.module.css';
import carouselOne from '../../../Assets/117.png'
import carouselTwo from '../../../Assets/158.png'
import HeroMarcas from '../../Container/HeroMarcas/HeroMarcas';


function Hero() {
  return (
    <div className={styles.container}>
      <div className={styles.carousel}>
        <img src={carouselOne} alt="Slide 1" />
        <img src={carouselTwo} alt="Slide 2" />
      </div>
      <h2>Las mejores marcas estan en CyberTech!</h2>

      <HeroMarcas/>
      
    </div>
  );
}

export default Hero;