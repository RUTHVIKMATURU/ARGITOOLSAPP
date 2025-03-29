import React, { useState } from "react";
import { useUser } from "@clerk/clerk-react";

function FarmerProfile() {
  const { user, isSignedIn } = useUser();

  const [products, setProducts] = useState([
    { id: 1, name: "Organic Tomatoes", price: 100, quantity: 50 },
    { id: 2, name: "Wheat", price: 500, quantity: 200 },
    { id: 3, name: "Rice", price: 450, quantity: 150 },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    if (newProduct.name && newProduct.price && newProduct.quantity) {
      setProducts([...products, { id: products.length + 1, ...newProduct }]);
      setNewProduct({ name: "", price: "", quantity: "" });
    }
  };

  // If the user is not signed in, show a login message
  if (!isSignedIn) {
    return (
      <div className="container mt-4">
        <h2>Farmer Profile</h2>
        <div className="alert alert-danger" role="alert">
          ⚠️ Please <strong>log in</strong> to view your profile.
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Farmer Profile</h2>

      {/* Farmer Info */}
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Farmer Details</h5>
          <p><strong>Name:</strong> {user.fullName}</p>
          <p><strong>Email:</strong> {user.primaryEmailAddress?.emailAddress}</p>
        </div>
      </div>

      {/* Product List */}
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">My Products</h5>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price (₹)</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>₹{product.price}</td>
                  <td>{product.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Product Form */}
      <div className="card mt-4">
        <div className="card-body">
          <h5 className="card-title">Add New Product</h5>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              value={newProduct.name}
              onChange={handleChange}
              className="form-control"
              placeholder="Product Name"
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="price"
              value={newProduct.price}
              onChange={handleChange}
              className="form-control"
              placeholder="Price (₹)"
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              name="quantity"
              value={newProduct.quantity}
              onChange={handleChange}
              className="form-control"
              placeholder="Quantity"
            />
          </div>
          <button className="btn btn-success" onClick={handleAddProduct}>
            Add Product
          </button>
        </div>
      </div>
    </div>
  );
}

export default FarmerProfile;
