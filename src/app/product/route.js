export async function GET(request) {
 const products = [
    { id: 'p1', name: 'Laptop', price: 1200, category: 'Electronics', stock: 5 },
    { id: 'p2', name: 'Desk Chair', price: 150, category: 'Furniture', stock: 3 },
    { id: 'p3', name: 'Phone', price: 900, category: 'Electronics', stock: 4 },
    { id: 'p4', name: 'lamp', price: 100, category: 'Furniture', stock: 10 },
    { id: 'p5', name: 'Beef', price: 10, category: 'Food', stock: 20 },
    { id: 'p6', name: 'Bread', price: 5, category: 'Food', stock: 35},
    { id: 'p7', name: 'Milk', price: 7, category: 'Food', stock: 30 },
    { id: 'p8', name: 'Mouse', price: 40, category: 'Electronics', stock: 4 }
 ];
 return Response.json(products);
}