'use client';
// allows add and subtract items
export default function CartSummary({ cart, resetCart, subItem }) {
    const itemCount = Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = Object.values(cart).reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2);

    if (itemCount === 0) {
        return <p>Your cart is empty.</p>;
    }

    return (
        <div>
            <h3>Cart</h3>
            <p>Total Items: **{itemCount}**</p>
            <p>Total Price: **${totalPrice}**</p>
            <ul>
                {Object.values(cart).map(item => (
                    <li key={item.id}>
                        {item.name} x {item.quantity} (${(item.price * item.quantity).toFixed(2)})
                        <button onClick={() => subItem(item.id)} >-1</button>
                    </li>
                ))}
            </ul>
            <button onClick={resetCart}>Clear Cart</button>
        </div>
    );
}