'use client';
export default function StatusMessage({ type, message }) {
    if (type === 'loading') {
        return <p>Loading products</p>;
    }
    if (type === 'error') {
        return <p>Error: {message}</p>;
    }
    if (type === 'empty') {
        return <p>No products match.</p>;
    }
    return null;
}