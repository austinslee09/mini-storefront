'use client';

export default function ProductCard({ product, addToCart }) {
    const isOutOfStock = product.stock <= 0;
    const { name, category, price, stock } = product;

    return (
        <div>
           <h3>{name}</h3>
            <p>Category: {category}</p>
            <p>Price: ${price}</p>
            <p>Stock: {stock}</p>
            <br />
            {/* disable when out of stock */}
           {outOfStock ? (<button disabled>Out of stock</button>
           ):
            (<button onClick={() => addCart(product)}>Add to cart</button>
        )}
        </div>
    );
}