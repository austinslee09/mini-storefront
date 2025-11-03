'use client';
import { useEffect, useState } from 'react';
import PriceFilter from './PriceFilter';
import ProductList from './ProductList';
import CategoryFilter from './CategoryFilter';
import StatusMessage from './StatusMessage';

export default function SalesDashboard() {
    const [sales, setSales] = useState([]);
    const [filters, setFilters] = useState({price:'', category:''});
    const update = (k, v) => setFilters(prev => ({...prev, [k]: v}));

    useEffect(() => {
        fetch('/api/products')
        .then(r => r.json())
        .then(setSales)
        .catch(console.error);
    }, []);
    function addCart (product) {
        console.log("Add to cart:", product);
    }
    return (
        <div>
            <h2> Catalog</h2>
            <PriceFilter value={filters.price} onChange={(v) => update('price', v)} />
            <CategoryFilter value={filters.category} onChange={(v) => update('category', v)} />
            <ProductList products={sales} addCart={addCart} />
        </div>
    )
}