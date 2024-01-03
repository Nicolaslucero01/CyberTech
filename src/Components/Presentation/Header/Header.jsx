import React from 'react'
import img from '../../../Assets/Logoo.png'
import styles from './header.module.css';

function Header() {
  return (
    <div className={styles.container}>
        <div className={styles.containerImg}>
            <img src={img}/>
        </div>
        

        <div className={styles.containerSearch}>
          <input className={styles.inputSearch}
            type="text"
            placeholder=""
          />
          <button className={styles.inputButton}>🔍</button>
        </div>

        <nav className={styles.containerNav}>
          <a href='#'>Home</a>
          <a href='#'>Categories</a>
          <a href='#'>Products</a>
          <a href='#'>About</a>

        </nav>



    </div>
  )
}

export default Header