import React, { useState } from "react";
import "./newcollection.css"; // Ensure you import the CSS file

const Newcollection = () => {
  const [formData, setFormData] = useState({
    collectionName: "",
    description: "",
    items: "",
    status: "", // Add status to the form data state
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStatusChange = (status) => {
    setFormData({
      ...formData,
      status: status,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("New Collection:", formData);
    // Add logic here to send the form data to your backend or state management.
  };

  return (
    <div className="newcollection-container">
      <h1>Create A New Collection</h1>
      <form onSubmit={handleSubmit} className="newcollection-form">
        <div className="newcollection-form-group">
          <label For="collectionName">Collection Name</label>
          <input
            type="text"
            id="collectionName"
            name="collectionName"
            value={formData.collectionName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="newcollection-form-group">
          <label For="description">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter description here"
            required
          />
        </div>

        <div className="newcollection-form-group">
          <label For="status">Status</label>
          <div className="newcollection-dropdown">
            <button
              type="button"
              className="newcollection-dropbtn"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {formData.status || "Select Status"}
            </button>
            <div className="newcollection-dropdown-content">
              <button
                type="button"
                onClick={() => handleStatusChange("Enable")}
              >
                Enable
              </button>
              <button
                type="button"
                onClick={() => handleStatusChange("Disable")}
              >
                Disable
              </button>
              <button
                type="button"
                onClick={() => handleStatusChange("Pending")}
              >
                Pending
              </button>
            </div>
          </div>
        </div>

        <div className="newcollection-form-group">
          <label For="items">Items</label>
          <textarea
            id="items"
            name="items"
            value={formData.items}
            onChange={handleChange}
            placeholder="List items here, separated by commas"
            required
          />
        </div>
      </form>
      <hr />
      <button
        type="CANCEL"
        className="newcollection-button newcollection-primary"
      >
        Cancel
      </button>
      <button
        type="save"
        className="newcollection-button newcollection-secondary"
      >
        save
      </button>
    </div>
  );
};

export default Newcollection;
