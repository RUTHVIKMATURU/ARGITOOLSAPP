import React, { useState } from "react";
import { useUser, RedirectToSignIn } from "@clerk/clerk-react";

function BuyerDashboard() {
  const { isSignedIn } = useUser();

  // Redirect to login if user is not signed in
  if (!isSignedIn) {
    return <RedirectToSignIn />;
  }

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

  const handlePayment = (product) => {
    const options = {
      key: "RAZORPAY_KEY_ID", // Replace with your Razorpay Key ID
      amount: product.price * 100,
      currency: "INR",
      name: "Farm Marketplace",
      description: `Buying ${product.product}`,
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
        setFarmerOrders([...farmerOrders, { id: farmerOrders.length + 1, ...product }]);
      },
      prefill: {
        name: "John Doe",
        email: "johndoe@example.com",
        contact: "9876543210",
      },
      theme: { color: "#3399cc" },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  return (
    <div className="container mt-4">
      <h2>Buyer Dashboard</h2>
      <div className="row">
        <div className="col-md-8">
          <div className="card mb-3">
            <div className="card-body">
              <h5 className="card-title">My Orders</h5>
              <table className="table table-striped table-bordered">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Price (₹)</th>
                  </tr>
                </thead>
                <tbody>
                  {farmerOrders.map((order) => (
                    <tr key={order.id}>
                      <td>{order.product}</td>
                      <td>{order.quantity}</td>
                      <td>₹{order.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

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
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price (₹)</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {availableProducts.map((product) => (
                <tr key={product.id}>
                  <td>{product.product}</td>
                  <td>₹{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <button className="btn btn-primary btn-sm" onClick={() => handlePayment(product)}>
                      Buy Now
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
