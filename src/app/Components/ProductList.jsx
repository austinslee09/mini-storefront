'use client';
import ProductCard from "./ProductCard";


 export default function ProductList({products, addToCart}) {
    return (
        <div> 
            <h2>Product List</h2>
        
            <div className="product-list"> 
                {products.map(p => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
            </div>
        </div>
    )
 }