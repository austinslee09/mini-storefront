'use client';
import ProductCard from "./ProductCard";
 
// Makes id
 export default function ProductList({products, addCart}) {
    return (
        <div> 
            <h2>Products</h2>
        
            <div className="product-list"> 
                {products.map(p => (
          <ProductCard key={p.id} product={p} addCart={addCart} />
            ))}
            </div>
        </div>
    )
 }