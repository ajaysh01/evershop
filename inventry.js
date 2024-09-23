import React, { useState } from "react";
import "./inventry.css";

const Inventory = () => {
  const [trackInventory, setTrackInventory] = useState(false);
  const [status, setStatus] = useState("In stock");
  const [sku, setSku] = useState("00");
  const [shippingWeight, setShippingWeight] = useState(0);

  return (
    <div className="inventory-shipping-section">
      <h3>Inventory and Shipping</h3>
      <div className="toggle-group">
        <label className="switch">
          <input
            type="checkbox"
            checked={trackInventory}
            onChange={() => setTrackInventory(!trackInventory)}
          />
          <span className="slider round"></span>
        </label>
        <span>
          Track inventory <i className="info-icon">i</i>
        </span>
      </div>

      <div className="inventory-details">
        <div className="inventory-item">
          <label For="status">Status</label>
          <select
            id="status"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="In stock">In stock</option>
            <option value="Out of stock">Out of stock</option>
            <option value="Pre-order">Pre-order</option>
          </select>
        </div>

        <div className="inventory-item">
          <label For="sku">
            SKU <i className="info-icon">i</i>
          </label>
          <input
            type="text"
            id="sku"
            value={sku}
            onChange={(e) => setSku(e.target.value)}
          />
        </div>

        <div className="inventory-item">
          <label For="shippingWeight">
            Shipping weight <i className="info-icon">i</i>
          </label>
          <div className="input-group">
            <input
              type="number"
              id="shippingWeight"
              value={shippingWeight}
              onChange={(e) => setShippingWeight(e.target.value)}
            />
            <span className="unit">kg</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
