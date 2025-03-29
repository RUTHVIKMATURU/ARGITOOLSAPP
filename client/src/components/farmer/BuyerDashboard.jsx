import React, { useState } from 'react';

function BuyerDashboard() {
  const [farmerOrders, setFarmerOrders] = useState([
    { id: 1, product: "Organic Tomatoes", quantity: 50, price: 100 },
    { id: 2, product: "Wheat", quantity: 200, price: 500 },
    { id: 3, product: "Rice", quantity: 150, price: 450 },
  ]);

  const [availableProducts] = useState([
    { id: 4, product: "Potatoes", price: 80, quantity: 100 },
    { id: 5, product: "Corn", price: 120, quantity: 200 },
    { id: 6, product: "Onions", price: 60, quantity: 150 },
  ]);

  const buyProduct = (product) => {
    const newOrder = { id: farmerOrders.length + 1, ...product };
    setFarmerOrders([...farmerOrders, newOrder]);
    alert(`${product.product} added to your orders!`);
  };

  return (
    <div className="container mt-4">
      <h2>Buyer Dashboard</h2>
      <div className="row">
        {/* Orders Section */}
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">My Orders</h5>
              <table className="table table-striped table-bordered table-hover">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price ($)</th>
                  </tr>
                </thead>
                <tbody>
                  {farmerOrders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.product}</td>
                      <td>{order.quantity}</td>
                      <td>${order.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Farmer Details Section */}
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Farmer Details</h5>
              <p><strong>Name:</strong> John Doe</p>
              <p><strong>Location:</strong> Punjab, India</p>
              <p><strong>Contact:</strong> +91 9876543210</p>
            </div>
          </div>
        </div>
      </div>

      {/* Available Products Section */}
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Available Products</h5>
          <table className="table table-bordered table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price ($)</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {availableProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.product}</td>
                  <td>${product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button className="btn btn-primary btn-sm" onClick={() => buyProduct(product)}>
                      Buy
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default BuyerDashboard;
