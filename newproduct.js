import React, { useState } from "react";
import "./newproduct.css"; // Ensure your CSS file is in the same directory

const ProductForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    sku: "",
    price: "",
    priceCurrency: "USD",
    weight: "",
    weightUnit: "kg",
    category: "Select category",
    taxClass: "None",
    description: "",
    urlKey: "",
    metaTitle: "",
    metaKeywords: "",
    metaDescription: "",
    status: "enabled",
    visibility: "visible",
    manageStock: "yes",
    stockAvailability: "yes",
    quantity: "",
    attributeGroup: "zapatos",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="productform-container p-6 bg-background rounded-lg shadow-md">
      <h2 className="productform-title text-lg font-semibold mb-4">
        Product Information
      </h2>
      <form onSubmit={handleSubmit} className="productform-form">
        {/* General Information Section */}
        <div className="productform-section">
          <h3 className="productform-section-title">General</h3>
          <div className="productform-form-group mb-4">
            <label className="productform-label" For="name">
              Name
            </label>
            <input
              className="productform-input"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              required
            />
          </div>
          <div className="productform-form-group mb-4">
            <label className="productform-label" For="sku">
              SKU
            </label>
            <input
              className="productform-input"
              type="text"
              id="sku"
              name="sku"
              value={formData.sku}
              onChange={handleChange}
              placeholder="SKU"
              required
            />
          </div>
        </div>

        {/* Pricing Section */}
        <div className="productform-section">
          <h3 className="productform-section-title">Pricing</h3>
          <div className="productform-form-group mb-4">
            <label className="productform-label" For="price">
              Price
            </label>
            <div className="productform-flex">
              <select
                className="productform-input productform-select"
                name="priceCurrency"
                value={formData.priceCurrency}
                onChange={handleChange}
                required
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
              </select>
            </div>
          </div>
        </div>

        {/* Weight Section */}
        <div className="productform-section">
          <h3 className="productform-section-title">Weight</h3>
          <div className="productform-form-group mb-4">
            <label className="productform-label" For="weight">
              Weight
            </label>
            <div className="productform-flex">
              <select
                className="productform-input productform-select"
                name="weightUnit"
                value={formData.weightUnit}
                onChange={handleChange}
                required
              >
                <option value="kg">kg</option>
                <option value="lbs">lbs</option>
              </select>
            </div>
          </div>
        </div>

        {/* Category & Tax Class Section */}
        <div className="productform-section">
          <h3 className="productform-section-title">Category & Tax</h3>
          <div className="productform-form-group mb-4">
            <label className="productform-label" For="category">
              Category
            </label>
            <select
              className="productform-input productform-select"
              id="category"
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="Select category" disabled>
                Select category
              </option>
              <option value="Kid">Kid</option>
              <option value="Woman">Woman</option>
              <option value="Man">Man</option>
            </select>
          </div>

          <div className="productform-form-group mb-4">
            <label className="productform-label" For="taxClass">
              Tax Class
            </label>
            <select
              className="productform-input productform-select"
              id="taxClass"
              name="taxClass"
              value={formData.taxClass}
              onChange={handleChange}
              required
            >
              <option value="None">None</option>
              <option value="Taxable Goods">Taxable Goods</option>
            </select>
          </div>
        </div>

        {/* Description Section */}
        <div className="productform-section">
          <h3 className="productform-section-title">Description</h3>
          <div className="productform-form-group mb-4">
            <label className="productform-label" For="description">
              Description
            </label>
            <textarea
              className="productform-textarea"
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows="3"
              placeholder="Enter product description"
              required
            ></textarea>
          </div>
        </div>

        {/* SEO Section */}
        <div className="productform-section">
          <h3 className="productform-section-title">
            Search Engine Optimization
          </h3>
          <div className="productform-form-group mb-4">
            <label className="productform-label" For="urlKey">
              URL Key
            </label>
            <input
              className="productform-input"
              type="text"
              id="urlKey"
              name="urlKey"
              value={formData.urlKey}
              onChange={handleChange}
              placeholder="URL Key"
              required
            />
          </div>

          <div className="productform-form-group mb-4">
            <label className="productform-label" For="metaTitle">
              Meta Title
            </label>
            <input
              className="productform-input"
              type="text"
              id="metaTitle"
              name="metaTitle"
              value={formData.metaTitle}
              onChange={handleChange}
              placeholder="Meta Title"
              required
            />
          </div>

          <div className="productform-form-group mb-4">
            <label className="productform-label" For="metaKeywords">
              Meta Keywords
            </label>
            <input
              className="productform-input"
              type="text"
              id="metaKeywords"
              name="metaKeywords"
              value={formData.metaKeywords}
              onChange={handleChange}
              placeholder="Meta Keywords"
              required
            />
          </div>

          <div className="productform-form-group mb-4">
            <label className="productform-label" For="metaDescription">
              Meta Description
            </label>
            <textarea
              className="productform-textarea"
              id="metaDescription"
              name="metaDescription"
              value={formData.metaDescription}
              onChange={handleChange}
              rows="3"
              placeholder="Meta Description"
              required
            ></textarea>
          </div>
        </div>

        {/* Inventory Section */}
        <div className="productform-section">
          <h3 className="productform-section-title">Inventory</h3>
          <div className="productform-form-group mb-4">
            <label className="productform-label">Manage Stock</label>
            <div className="productform-radio-group">
              <label className="productform-radio-label">
                <input
                  type="radio"
                  name="manageStock"
                  value="no"
                  checked={formData.manageStock === "no"}
                  onChange={handleChange}
                />
                No
              </label>
              <label className="productform-radio-label">
                <input
                  type="radio"
                  name="manageStock"
                  value="yes"
                  checked={formData.manageStock === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
            </div>
          </div>

          <div className="productform-form-group mb-4">
            <label className="productform-label">Stock Availability</label>
            <div className="productform-radio-group">
              <label className="productform-radio-label">
                <input
                  type="radio"
                  name="stockAvailability"
                  value="no"
                  checked={formData.stockAvailability === "no"}
                  onChange={handleChange}
                />
                No
              </label>
              <label className="productform-radio-label">
                <input
                  type="radio"
                  name="stockAvailability"
                  value="yes"
                  checked={formData.stockAvailability === "yes"}
                  onChange={handleChange}
                />
                Yes
              </label>
            </div>
          </div>

          <div className="productform-form-group mb-4">
            <label className="productform-label" For="quantity">
              Quantity
            </label>
            <input
              className="productform-input"
              type="number"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              placeholder="Quantity"
              required
            />
          </div>
        </div>

        {/* Attributes Section */}
        <div className="productform-section">
          <h3 className="productform-section-title">Attributes</h3>
          <div className="productform-form-group mb-4">
            <label className="productform-label" For="attributeGroup">
              Attribute Group
            </label>
            <select
              className="productform-input productform-select"
              id="attributeGroup"
              name="attributeGroup"
              value={formData.attributeGroup}
              onChange={handleChange}
              required
            >
              <option value="zapatos">Zapatos</option>
              <option value="ropa">Ropa</option>
              <option value="accesorios">Accesorios</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit" className="productform-submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
