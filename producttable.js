import React, { useState } from "react";
import "./product.css";

const ProductTable = () => {
  const [products] = useState([
    {
      id: 1,
      name: "I'm a ",
      type: "Physical",
      sku: "001",
      price: "₹85.00",
      inventory: "In stock",
      variants: 2,
      status: "enable",
      stock: 50,
      image: "/img/download.jpg",
    },
    {
      id: 2,
      name: "I'm a product",
      type: "Physical",
      sku: "005",
      price: "₹85.00",
      inventory: "In stock",
      variants: 2,
      status: "enable",
      stock: 30,
      image: "/img/download.jpg",
    },
    {
      id: 3,
      name: "I'm a product1",
      type: "Physical",
      sku: "001",
      price: "₹85.00",
      inventory: "In stock",
      variants: 2,
      status: "disable",
      stock: 0,
      image: "/img/download.jpg",
    },
    {
      id: 4,
      name: "I'm a product2",
      type: "Physical",
      sku: "005",
      price: "₹85.00",
      inventory: "In stock",
      variants: 2,
      status: "enable",
      stock: 20,
      image: "/img/download.jpg",
    },
    {
      id: 5,
      name: "I'm a rishi",
      type: "Physical",
      sku: "003",
      price: "₹85.00",
      inventory: "In stock",
      variants: 0,
      status: "enable",
      stock: 5,
      image: "/img/download.jpg",
    },
    {
      id: 6,
      name: "I'm a product3",
      type: "Physical",
      sku: "004",
      price: "₹85.00",
      inventory: "In stock",
      variants: 0,
      status: "disable",
      stock: 0,
      image: "/img/download.jpg",
    },
    {
      id: 7,
      name: "I'm a product3",
      type: "Physical",
      sku: "002",
      price: "₹85.00",
      inventory: "In stock",
      variants: 0,
      status: "enable",
      stock: 15,
      image: "/img/download.jpg",
    },
    {
      id: 8,
      name: "I'm a product5",
      type: "Physical",
      sku: "005",
      price: "₹85.00",
      inventory: "In stock",
      variants: 2,
      status: "enable",
      stock: 10,
      image: "/img/download.jpg",
    },
    {
      id: 9,
      name: "I'm a raj",
      type: "Physical",
      sku: "001",
      price: "₹85.00",
      inventory: "In stock",
      variants: 2,
      status: "enable",
      stock: 25,
      image: "/img/download.jpg",
    },
    {
      id: 10,
      name: "I'm a product6",
      type: "Physical",
      sku: "005",
      price: "₹85.00",
      inventory: "In stock",
      variants: 2,
      status: "enable",
      stock: 35,
      image: "/img/download.jpg",
    },
    {
      id: 11,
      name: "I'm a product7",
      type: "Physical",
      sku: "003",
      price: "₹85.00",
      inventory: "In stock",
      variants: 0,
      status: "disable",
      stock: 0,
      image: "/img/download.jpg",
    },
    {
      id: 12,
      name: "I'm a product8",
      type: "Physical",
      sku: "004",
      price: "₹85.00",
      inventory: "In stock",
      variants: 0,
      status: "enable",
      stock: 45,
      image: "/img/download.jpg",
    },
    {
      id: 13,
      name: "I'm a product9",
      type: "Physical",
      sku: "002",
      price: "₹85.00",
      inventory: "In stock",
      variants: 0,
      status: "enable",
      stock: 40,
      image: "/img/download.jpg",
    },
    {
      id: 14,
      name: "I'm a product10",
      type: "Physical",
      sku: "005",
      price: "₹85.00",
      inventory: "In stock",
      variants: 2,
      status: "enable",
      stock: 55,
      image: "/img/download.jpg",
    },
    {
      id: 15,
      name: "I'm a product10",
      type: "Physical",
      sku: "001",
      price: "₹85.00",
      inventory: "In stock",
      variants: 2,
      status: "enable",
      stock: 60,
      image: "/img/download.jpg",
    },
    {
      id: 16,
      name: "I'm a product12",
      type: "Physical",
      sku: "005",
      price: "₹85.00",
      inventory: "In stock",
      variants: 2,
      status: "disable",
      stock: 0,
      image: "/img/download.jpg",
    },
    {
      id: 17,
      name: "I'm a product13",
      type: "Physical",
      sku: "003",
      price: "₹85.00",
      inventory: "In stock",
      variants: 0,
      status: "enable",
      stock: 65,
      image: "/img/download.jpg",
    },
    {
      id: 18,
      name: "I'm a product14",
      type: "Physical",
      sku: "004",
      price: "₹85.00",
      inventory: "In stock",
      variants: 0,
      status: "enable",
      stock: 70,
      image: "/img/download.jpg",
    },
    {
      id: 19,
      name: "I'm a product15",
      type: "Physical",
      sku: "002",
      price: "₹85.00",
      inventory: "In stock",
      variants: 0,
      status: "disable",
      stock: 0,
      image: "/img/download.jpg",
    },
  ]);
  const [searchText, setSearchText] = useState("");
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [productTypeFilter, setProductTypeFilter] = useState("");

  const handleCheckboxChange = (index) => {
    const newSelectedProducts = [...selectedProducts];
    if (newSelectedProducts.includes(index)) {
      newSelectedProducts.splice(newSelectedProducts.indexOf(index), 1);
    } else {
      newSelectedProducts.push(index);
    }
    setSelectedProducts(newSelectedProducts);
  };

  const handleSelectAll = () => {
    if (selectedProducts.length === products.length) {
      setSelectedProducts([]);
    } else {
      setSelectedProducts(products.map((_, index) => index));
    }
  };

  const handleClearFilter = () => {
    setSearchText("");
    setSelectedProducts([]);
    setStatusFilter("");
    setProductTypeFilter("");
  };

  const handleSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredProducts = products.filter((product) => {
    return (
      product.name.toLowerCase().includes(searchText.toLowerCase()) &&
      (statusFilter ? product.status === statusFilter : true) &&
      (productTypeFilter ? product.type === productTypeFilter : true)
    );
  });

  return (
    <div className="table-container">
      <div className="filter-bar">
        <div className="filter-options">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={handleSearch}
          />
        </div>
        <div className="dropdown">
          <button className="dropbtn">Status</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => setStatusFilter("enable")}>
              Enable
            </a>
            <a href="#" onClick={() => setStatusFilter("disable")}>
              Disable
            </a>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">Product Type</button>
          <div className="dropdown-content">
            <a href="#" onClick={() => setProductTypeFilter("Physical")}>
              Physical
            </a>
            <a href="#" onClick={() => setProductTypeFilter("Digital")}>
              Digital
            </a>
          </div>
        </div>
        <a
          href="#"
          className="clear-filter"
          onClick={(e) => {
            e.preventDefault();
            handleClearFilter();
          }}
        >
          Clear filter
        </a>
      </div>

      <table>
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                onChange={handleSelectAll}
                checked={
                  selectedProducts.length === products.length &&
                  products.length > 0
                }
              />
            </th>
            <th>THUMBNAIL</th>
            <th>NAME</th>
            <th>PRICE</th>
            <th>SKU</th>
            <th>STOCK</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product, index) => (
            <tr
              key={index}
              style={{
                backgroundColor:
                  searchText &&
                  product.name.toLowerCase().includes(searchText.toLowerCase())
                    ? "#ffff99"
                    : "#fff",
              }}
            >
              <td>
                <input
                  type="checkbox"
                  className="select-item"
                  checked={selectedProducts.includes(index)}
                  onChange={() => handleCheckboxChange(index)}
                />
              </td>
              <td>
                <img src={product.image} alt={product.name} />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.sku}</td>
              <td>{product.stock}</td>
              <td>
                <span className={`status-indicator ${product.status}`}>
                  {product.status.charAt(0).toUpperCase() +
                    product.status.slice(1)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination-control">
        <div className="items-per-page">
          <label htmlFor="itemsPerPage">Show</label>
          <input type="number" id="itemsPerPage" defaultValue="10" min="1" />
          <label htmlFor="itemsPerPage">per page</label>
        </div>
        <div className="pagination">
          <button className="pagination-btn" onClick={() => {}}>
            1
          </button>
          <button className="pagination-btn" onClick={() => {}}>
            &rsaquo;
          </button>
          <button className="pagination-btn" onClick={() => {}}>
            &raquo;
          </button>
          <span id="total-record">{filteredProducts.length} records</span>
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
