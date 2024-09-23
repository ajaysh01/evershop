import React, { useState, useEffect, navigate } from "react";
import "./category.css";

const Category = () => {
  const initialCategories = [
    { id: 1, name: "Kid", status: true, includeInMenu: false },
    { id: 2, name: "Women", status: true, includeInMenu: true },
    { id: 3, name: "Men", status: false, includeInMenu: true },
    { id: 4, name: "Shoes", status: true, includeInMenu: false },
    { id: 5, name: "Accessories", status: true, includeInMenu: true },
    { id: 6, name: "Toys", status: false, includeInMenu: true },
    { id: 7, name: "Electronics", status: true, includeInMenu: false },
    { id: 8, name: "Books", status: true, includeInMenu: true },
    { id: 9, name: "Furniture", status: false, includeInMenu: true },
    { id: 10, name: "Sports", status: true, includeInMenu: false },
    { id: 11, name: "Beauty", status: true, includeInMenu: true },
    { id: 12, name: "Grocery", status: false, includeInMenu: true },
    { id: 13, name: "Spors", status: true, includeInMenu: false },
    { id: 14, name: "Beauties", status: true, includeInMenu: true },
    { id: 15, name: "Groceries", status: false, includeInMenu: true },
  ];

  const [categories, setCategories] = useState(initialCategories);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleClearFilter = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSelectAll(false);
    setCurrentPage(1);
  };

  const handleSelectCategory = (id) => {
    if (selectedCategories.includes(id)) {
      setSelectedCategories(selectedCategories.filter((catId) => catId !== id));
    } else {
      setSelectedCategories([...selectedCategories, id]);
    }
  };

  const handleSelectAll = () => {
    if (selectAll) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories(paginatedCategories.map((cat) => cat.id));
    }
    setSelectAll(!selectAll);
  };

  const handleDelete = () => {
    setCategories(
      categories.filter((cat) => !selectedCategories.includes(cat.id))
    );
    setSelectedCategories([]);
    setSelectAll(false);
  };

  const filteredCategories = categories.filter((cat) =>
    cat.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedCategories = filteredCategories.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  useEffect(() => {
    if (currentPage > Math.ceil(filteredCategories.length / perPage)) {
      setCurrentPage(1);
    }
  }, [filteredCategories, perPage, currentPage]);

  const handleNewCategory = () => {
    navigate("/NewCategory"); // Navigate to NewCategory page
  };

  return (
    <div className="pl-container8">
      <div className="pl-header8">
        <h2>Categories</h2>
        <button onClick={handleNewCategory} className="pl-new-category-btn">
          New Category
        </button>
      </div>
      <div className="pl-filter-row">
        <input
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button className="pl-clear-filter-btn" onClick={handleClearFilter}>
          Clear filter
        </button>
      </div>
      <table className="pl-categories-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                checked={selectAll}
                onChange={handleSelectAll}
              />
            </th>
            <th>CATEGORY NAME</th>
            <th>STATUS</th>
            <th>INCLUDE IN MENU</th>
          </tr>
        </thead>
        <tbody>
          {paginatedCategories.map((cat) => (
            <tr key={cat.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat.id)}
                  onChange={() => handleSelectCategory(cat.id)}
                />
              </td>
              <td>{cat.name}</td>
              <td>
                <span
                  className={`pl-status ${
                    cat.status ? "pl-active" : "pl-inactive"
                  }`}
                ></span>
              </td>
              <td>{cat.includeInMenu ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {selectedCategories.length > 0 && (
        <div className="pl-bulk-actions">
          <span>{selectedCategories.length} selected</span>
          <button onClick={handleDelete}>Delete</button>
        </div>
      )}
      <div className="pl-pagination8">
        <div>
          <label>
            Show
            <select
              value={perPage}
              onChange={(e) => setPerPage(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={15}>15</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
            per page
          </label>
        </div>
        <div>
          <button
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            Prev
          </button>
          <span>
            Page {currentPage} of{" "}
            {Math.ceil(filteredCategories.length / perPage)}
          </span>
          <button
            disabled={
              currentPage === Math.ceil(filteredCategories.length / perPage)
            }
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            Next
          </button>
        </div>
        <div>
          <span>{filteredCategories.length} records</span>
        </div>
      </div>
    </div>
  );
};

export default Category;
