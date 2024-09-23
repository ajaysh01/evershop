import React, { useState } from "react";
import "./cmspage.css";

const CmsPage = () => {
  const [searchText, setSearchText] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);

  const data = [
    { id: 1, name: "Home Page", status: "ACTIVE" },
    { id: 2, name: "About Us", status: "INACTIVE" },
    { id: 3, name: "Contact", status: "ACTIVE" },
    { id: 4, name: "Services", status: "ACTIVE" },
    { id: 5, name: "FAQ", status: "INACTIVE" },
    { id: 6, name: "Privacy Policy", status: "ACTIVE" },
    { id: 7, name: "Terms of Service", status: "ACTIVE" },
    { id: 8, name: "Blog", status: "ACTIVE" },
    { id: 9, name: "Careers", status: "INACTIVE" },
    { id: 10, name: "Testimonials", status: "ACTIVE" },
    { id: 11, name: "Portfolio", status: "ACTIVE" },
    { id: 12, name: "Gallery", status: "INACTIVE" },
    { id: 13, name: "Partners", status: "ACTIVE" },
  ];

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const paginatedData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1);
  };

  const handleItemsPerPageChange = (e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="cms-container">
      <div className="cms-header">
        <h2>Cms Page</h2>
        <a href="#" className="cms-new-page">
          New Page
        </a>
      </div>

      <div className="cms-filter-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>

      <table className="cms-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>NAME</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td>
                <input type="checkbox" />
              </td>
              <td>{item.name}</td>
              <td>
                <span
                  className={`cms-dot ${
                    item.status === "ACTIVE" ? "active" : "inactive"
                  }`}
                ></span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cms-page-pagination">
        <button
          className="cms-page-pagination-btn"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
        <button
          className="cms-page-pagination-btn"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lsaquo;
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`cms-page-pagination-btn ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="cms-page-pagination-btn"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &rsaquo;
        </button>
        <button
          className="cms-page-pagination-btn"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>

        <span id="cms-page-total-record">
          Showing {paginatedData.length} of {filteredData.length} records
        </span>
      </div>
    </div>
  );
};

export default CmsPage;
