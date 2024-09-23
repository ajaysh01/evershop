import React, { useState } from 'react';
import "./pro.css";
// import { useNavigate } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Pro = () => {
  const [products] = useState([
    { id: 1, name: "I'm a product", type: 'Physical', sku: '001', price: '₹85.00', inventory: 'In stock', variants: 2, image: '/img/download.jpg' },
    { id: 2, name: "I'm a product", type: 'Physical', sku: '005', price: '₹85.00', inventory: 'In stock', variants: 2, image: '/img/download.jpg' },
    { id: 3, name: "I'm a product", type: 'Physical', sku: '001', price: '₹85.00', inventory: 'In stock', variants: 2, image: '/img/download.jpg' },
    { id: 4, name: "I'm a product", type: 'Physical', sku: '005', price: '₹85.00', inventory: 'In stock', variants: 2, image: '/img/download.jpg' },
    { id: 5, name: "I'm a rishi", type: 'Physical', sku: '003', price: '₹85.00', inventory: 'In stock', variants: 0, image: '/img/download.jpg' },
    { id: 6, name: "I'm a product", type: 'Physical', sku: '004', price: '₹85.00', inventory: 'In stock', variants: 0, image: '/img/download.jpg' },
    { id: 7, name: "I'm a product", type: 'Physical', sku: '002', price: '₹85.00', inventory: 'In stock', variants: 0, image: '/img/download.jpg' },
    { id: 8, name: "I'm a product", type: 'Physical', sku: '005', price: '₹85.00', inventory: 'In stock', variants: 2, image: '/img/download.jpg' },
    { id: 9, name: "I'm a raj", type: 'Physical', sku: '001', price: '₹85.00', inventory: 'In stock', variants: 2, image: '/img/download.jpg' },
    { id: 10, name: "I'm a product", type: 'Physical', sku: '005', price: '₹85.00', inventory: 'In stock', variants: 2, image: '/img/download.jpg' },
    { id: 11, name: "I'm a product", type: 'Physical', sku: '003', price: '₹85.00', inventory: 'In stock', variants: 0, image: '/img/download.jpg' },
    { id: 12, name: "I'm a product", type: 'Physical', sku: '004', price: '₹85.00', inventory: 'In stock', variants: 0, image: '/img/download.jpg' },
    { id: 13, name: "I'm a product", type: 'Physical', sku: '002', price: '₹85.00', inventory: 'In stock', variants: 0, image: '/img/download.jpg' },
    { id: 14, name: "I'm a product", type: 'Physical', sku: '005', price: '₹85.00', inventory: 'In stock', variants: 2, image: '/img/download.jpg' },
    { id: 15, name: "I'm a product", type: 'Physical', sku: '001', price: '₹85.00', inventory: 'In stock', variants: 2, image: '/img/download.jpg' },
    { id: 16, name: "I'm a product", type: 'Physical', sku: '005', price: '₹85.00', inventory: 'In stock', variants: 2, image: '/img/download.jpg' },
    { id: 17, name: "I'm a product", type: 'Physical', sku: '003', price: '₹85.00', inventory: 'In stock', variants: 0, image: '/img/download.jpg' },
    { id: 18, name: "I'm a product", type: 'Physical', sku: '004', price: '₹85.00', inventory: 'In stock', variants: 0, image: '/img/download.jpg' },
    { id: 19, name: "I'm a product", type: 'Physical', sku: '002', price: '₹85.00', inventory: 'In stock', variants: 0, image: '/img/download.jpg' },
  ]);

  const [selectedProducts, setSelectedProducts] = useState([]);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // const navigate = useNavigate();

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedProducts(products.map((product) => product.id));
    } else {
      setSelectedProducts([]);
    }
  };

  const handleSelectProduct = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id) ? prev.filter((productId) => productId !== id) : [...prev, id]
    );
  };

  const toggleDropdown = () => {
    setDropdownVisible((prev) => !prev);
  };

  // Filter products based on search query
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleNewProductClick = () => {
    // navigate('/NewProduct'); // Navigate to the NewProduct route
  };

  return (
    <div className="product-table-container">
      <div className="table-header">
        <div className="header-left">
          <h3>Products <span>{products.length}</span></h3>
        </div>
        <div className="header-right">
          <button className="btn-more-actions">More Actions</button>
          <button className="btn-new-product" onClick={handleNewProductClick}>
            + New Product
          </button>
        </div>
      </div>

      <div className="header-row">
        <div className="filter-options">
          <select>
            <option>All products</option>
            {/* Add more options if needed */}
          </select>
          <div className="manage-view-dropdown">
            <button className="btn-manage-view" onClick={toggleDropdown}>
              Manage View <i className="fa-solid fa-chevron-down"></i>
            </button>
            {dropdownVisible && (
              <div className="dropdown-content">
                <button className="dropdown-item">
                  <i className="fa-solid fa-check"></i> Save Changes
                </button>
                <button className="dropdown-item">
                  <i className="fa-regular fa-copy"></i> Save as a New View
                </button>
                <button className="dropdown-item">
                  <i className="fa-solid fa-pen"></i> Rename
                </button>
                <button className="dropdown-item">
                  <i className="fa-regular fa-flag"></i> Set as default view
                </button>
                <button className="dropdown-item">
                  <i className="fa-regular fa-trash"></i> Delete
                </button>
              </div>
            )}
          </div>
        </div>
        <div className="filter-search">
          <button className="btn-filter">
            <i className="fa-solid fa-filter"></i> Filter
          </button>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <table className="product-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={selectedProducts.length === products.length}
              />
            </th>
            <th>Name</th>
            <th>Type</th>
            <th>SKU</th>
            <th>Price</th>
            <th>Inventory</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedProducts.includes(product.id)}
                  onChange={() => handleSelectProduct(product.id)}
                />
              </td>
              <td className="product-name-cell">
                <img src={product.image} alt="Product" className="product-image" />
                <div className="product-info">
                  <span>{product.name}</span>
                  {product.variants > 0 && <span className="product-variants">{product.variants} variants</span>}
                </div>
              </td>
              <td>{product.type}</td>
              <td>{product.sku}</td>
              <td>{product.price}</td>
              <td>{product.inventory}</td>
              <td>
                <button className="btn-options">...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Pro;
