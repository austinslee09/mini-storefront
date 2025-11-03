'use client';

export default function ProductList({products, addToCart}) {
    return (
        
        <div className="product-list">
            {products.map(p => ( // 
            <ProductCard key={p.id} product={p} addToCart={addToCart} />
            ))}
        </div>
    )
}