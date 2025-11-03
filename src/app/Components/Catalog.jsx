'use client';
import { useState, useEffect } from "react";
import CategoryFilter from "./CategoryFilter";
import PriceFilter from "./PriceFilter";
import ProductList from "./ProductList";
import CartSummary from "./CartSummary";
import StatusMessage from "./StatusMessage";

export default function ProductCatalog() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filters, setFilters] = useState({price:'', category: ''});
    
    

// Fetch API 
    useEffect(() => {
            fetch('/API/products')
            .then(r => r.json())
            .then(setProducts)
            .catch(console.error);
        }, []);

    const addCart = (product) => {
        setCart([...cart, product]);
        };

    useEffect(() => {
        const interval = setInterval(() => {
            setProducts(prev =>
            prev.map(p => ({
                ...p,
                stock: Math.max(p.stock - Math.floor(Math.random() * 2), 0),
                }))
            );
            }, 4000);

        return () => clearInterval(interval);
    }, []);

    const update = (k,v) => { setFilters(prev => ({...prev, [k]:v})) }; 
// Filter
    let filteredProducts = products;
    if (filters.category !== '') {
    filteredProducts = filteredProducts.filter(p =>
        p.category.toLowerCase().includes(filters.category.toLowerCase())
    );
    }
    if (filters.price !== '') {
    filteredProducts = filteredProducts.filter(p =>
        p.price <= Number(filters.price)
    );
    }

// Return
    return ( <center>
         <div className="product-catalog">
            <h1>Mini Storefront</h1>
            <PriceFilter value={filters.price} onChange={(v) => update('price', v)} />
            <CategoryFilter value={filters.category} onChange={(v) => update('category', v)} />
            <ProductList products={filteredProducts} addToCart={addToCart} />
            <CartSummary cart={cart} setCart={setCart} />
            <StatusMessage loading={loading} error={error} empty={empty} />
            <h3>Cart: {cart.length} item(s)</h3>
            <button><ul> <a href="https://www.youtube.com/watch?v=dwLCjZVEtpE"> Press</a> </ul></button>
        </div>
        </center>
        
    );
};