import React, { useState } from "react";

function SellerDashboard() {
  const [tools, setTools] = useState([
    { id: 1, name: "Tractor", status: "Available" },
    { id: 2, name: "Plow", status: "Not Available" },
    { id: 3, name: "Irrigation Pump", status: "Available" },
  ]);

  const [orders] = useState([
    { id: 1, buyer: "Rahul Sharma", product: "Organic Tomatoes", quantity: 30, status: "Delivered" },
    { id: 2, buyer: "Anita Verma", product: "Wheat", quantity: 100, status: "Pending" },
  ]);

  const [newTool, setNewTool] = useState("");

  const addTool = () => {
    if (newTool.trim() === "") return alert("Tool name cannot be empty!");
    const newEntry = { id: tools.length + 1, name: newTool, status: "Available" };
    setTools([...tools, newEntry]);
    setNewTool(""); // Clear input after adding
  };

  const deleteTool = (id) => {
    setTools(tools.filter((tool) => tool.id !== id));
  };

  return (
    <div>
      {/* Main Content */}
      <div className="container mt-4">
        <h2>Seller Dashboard</h2>
        <div className="row">
          {/* Tools Section */}
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">My Tools</h5>
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Tool</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {tools.map((tool) => (
                      <tr key={tool.id}>
                        <td>{tool.name}</td>
                        <td>
                          <span className={`badge ${tool.status === "Available" ? "bg-success" : "bg-danger"}`}>
                            {tool.status}
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-danger btn-sm" onClick={() => deleteTool(tool.id)}>
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="input-group mt-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter new tool name"
                    value={newTool}
                    onChange={(e) => setNewTool(e.target.value)}
                  />
                  <button className="btn btn-primary" onClick={addTool}>Add Tool</button>
                </div>
              </div>
            </div>
          </div>

          {/* Orders Section */}
          <div className="col-md-6">
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Orders Received</h5>
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Buyer Name</th>
                      <th>Product</th>
                      <th>Quantity</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orders.map((order) => (
                      <tr key={order.id}>
                        <td>{order.buyer}</td>
                        <td>{order.product}</td>
                        <td>{order.quantity}</td>
                        <td>
                          <span className={`badge ${order.status === "Delivered" ? "bg-success" : "bg-warning"}`}>
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellerDashboard;
