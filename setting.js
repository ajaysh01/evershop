import React, { useState } from "react";
import "./setting.css";

function Setting() {
  const [storeInfo, setStoreInfo] = useState({
    storeName: "An Amazing EverShop Store",
    storeDescription: "An Amazing EverShop Store",
    storePhoneNumber: "",
    storeEmail: "",
    country: "United Kingdom",
    address: "",
    city: "",
    province: "England",
    postalCode: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setStoreInfo({ ...storeInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Store Info Submitted:", storeInfo);
  };

  return (
    <div className="setting-container">
      <div className="sidebar">
        <div className="settings-option">
          <h4>STORE SETTING</h4>
          <p>Configure your store information</p>
        </div>
        <hr />
        <div className="settings-option">
          <h4>PAYMENT SETTING</h4>
          <p>Configure the available payment methods</p>
        </div>
        <hr />
        <div className="settings-option">
          <h4>SHIPPING SETTING</h4>
          <p>Where you ship, shipping methods and delivery fee</p>
        </div>
        <hr />
        <div className="settings-option">
          <h4>TAX SETTING</h4>
          <p>Configure tax classes and tax rates</p>
        </div>
      </div>
      <div className="form-container">
        <form action="/submit">
          <h2>STORE INFORMATION</h2>
          <label>
            Store Name:
            <input
              type="text"
              name="storeName"
              value={storeInfo.storeName}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Store Description:
            <input
              type="text"
              name="storeDescription"
              value={storeInfo.storeDescription}
              onChange={handleInputChange}
              required
            />
          </label>
          <hr />
          <h2>CONTACT INFORMATION</h2>
          <label>
            Store Phone Number:
            <input
              type="text"
              name=""
              value={storeInfo.storePhoneNumber}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            Store Email:
            <input
              type="email"
              name="storeEmail"
              value={storeInfo.storeEmail}
              onChange={handleInputChange}
              required
            />
          </label>
          <hr />
          <h2>ADDRESS</h2>
          <label>
            Country:
            <select
              name="country"
              value={storeInfo.country}
              onChange={handleInputChange}
              required
            >
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              {/* Add more countries as needed */}
            </select>
          </label>
          <label>
            Address:
            <input
              type="text"
              name="address"
              value={storeInfo.address}
              onChange={handleInputChange}
              required
            />
          </label>
          <label>
            City:
            <input
              type="text"
              name="city"
              value={storeInfo.city}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Province:
            <select
              name="province"
              value={storeInfo.province}
              onChange={handleInputChange}
            >
              <option value="England">England</option>
              <option value="Scotland">Scotland</option>
              <option value="Wales">Wales</option>
              {/* Add more provinces as needed */}
            </select>
          </label>
          <label>
            Postal Code:
            <input
              type="text"
              name="postalCode"
              value={storeInfo.postalCode}
              onChange={handleInputChange}
            />
          </label>
        </form>
        <hr />
        <button type="submit" className="save-button">
          Save
        </button>
      </div>
    </div>
  );
}

export default Setting;
