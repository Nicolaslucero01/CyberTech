import React from 'react'
import styles from './Footer.module.css'

function footer (){ 
return (
    <footer className={styles.container}>
        <div className={styles.containerHelp}>
            <h4>Contacto</h4>
            <div className={styles.containerChild}>
                <span>Cipolletti, Río Negro, Argentina</span>
                <span>298765432</span>
                <span>Instagram: CyberTech</span>
            </div>
        </div>

        <div className={styles.containerHelp}>
            <h4>Ayuda</h4>
            <div className={styles.containerChild}>
                <a href='#'>Políticas de devolución</a>
                <a href='"#'>Tramite de garantía</a>
                <a href='"'>Botón de arrepentimiento</a>
                
            </div>
        </div>
    </footer>
  )
}

export default footer 