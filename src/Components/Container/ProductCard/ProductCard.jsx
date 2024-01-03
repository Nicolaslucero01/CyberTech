import React from 'react'
import styles from './productCard.module.css'
import img from '../../../Assets/productos/r5600g.jpg'
import ProductButton from '../ProductButton/ProductButton'

function ProductCard({product}) {
  return (
    <div className={styles.container}>
        <div className={styles.containerTitle}>
           <img src={img}/>
           <h2>{product.name}</h2>
        </div>

        <div className={styles.containerPrice}>
            <span>Precio de contado</span>
            <h3>${product.salePrice}</h3>
        </div>

        <div className={styles.containerPrice}>
            <span>Precio de lista</span>
            <h3>${product.price}</h3>
        </div>
        <div className={styles.containerButton}>
            <ProductButton/>
        </div>

        
    </div>
  )
}

export default ProductCard