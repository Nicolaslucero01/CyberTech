import React from 'react'
import jsonData from '../../../Data/Products.json';
import ProductCard from '../../Container/ProductCard/ProductCard';
import styles from './Products.module.css'

function Products() {
  return (
    <div className={styles.container}>
        {jsonData.map((product)=>(
            <ProductCard key={product.id} product={product}/>  
        ))}
    </div>
  );

}

export default Products