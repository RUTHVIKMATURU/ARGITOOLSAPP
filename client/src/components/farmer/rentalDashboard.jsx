import React, { useState } from "react";

function RentalDashboard() {
  const [rentalTools, setRentalTools] = useState([
    { id: 1, name: "Tractor", status: "Available", price: 500 },
    { id: 2, name: "Plow", status: "Rented", price: 200 },
    { id: 3, name: "Irrigation Pump", status: "Available", price: 300 },
  ]);

  const [rentalRequests] = useState([
    { id: 1, buyer: "Rahul Sharma", tool: "Tractor", status: "Approved" },
    { id: 2, buyer: "Anita Verma", tool: "Plow", status: "Pending" },
  ]);

  const [newTool, setNewTool] = useState("");
  const [newPrice, setNewPrice] = useState("");

  const addToolForRent = () => {
    if (newTool.trim() === "" || newPrice.trim() === "") return alert("Tool name and price cannot be empty!");
    const newEntry = { id: rentalTools.length + 1, name: newTool, status: "Available", price: Number(newPrice) };
    setRentalTools([...rentalTools, newEntry]);
    setNewTool("");
    setNewPrice("");
  };

  const removeTool = (id) => {
    setRentalTools(rentalTools.filter((tool) => tool.id !== id));
  };

  return (
    <div>
      {/* Main Content */}
      <div className="container mt-4">
        <h2>Rental Dashboard</h2>
        <div className="row">
          {/* Rental Tools Section */}
          <div className="col-md-6">
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Tools for Rent</h5>
                <table className="table table-striped table-bordered">
                  <thead>
                    <tr>
                      <th>Tool</th>
                      <th>Price ($/day)</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rentalTools.map((tool) => (
                      <tr key={tool.id}>
                        <td>{tool.name}</td>
                        <td>${tool.price}</td>
                        <td>
                          <span className={`badge ${tool.status === "Available" ? "bg-success" : "bg-danger"}`}>
                            {tool.status}
                          </span>
                        </td>
                        <td>
                          <button className="btn btn-danger btn-sm" onClick={() => removeTool(tool.id)}>
                            Remove
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
                    placeholder="Enter tool name"
                    value={newTool}
                    onChange={(e) => setNewTool(e.target.value)}
                  />
                  <input
                    type="number"
                    className="form-control"
                    placeholder="Enter price ($/day)"
                    value={newPrice}
                    onChange={(e) => setNewPrice(e.target.value)}
                  />
                  <button className="btn btn-primary" onClick={addToolForRent}>Add Tool</button>
                </div>
              </div>
            </div>
          </div>

          {/* Rental Requests Section */}
          <div className="col-md-6">
            <div className="card mt-3">
              <div className="card-body">
                <h5 className="card-title">Rental Requests</h5>
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th>Buyer Name</th>
                      <th>Tool</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {rentalRequests.map((request) => (
                      <tr key={request.id}>
                        <td>{request.buyer}</td>
                        <td>{request.tool}</td>
                        <td>
                          <span className={`badge ${request.status === "Approved" ? "bg-success" : "bg-warning"}`}>
                            {request.status}
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

export default RentalDashboard;
