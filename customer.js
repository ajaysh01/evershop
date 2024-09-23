import React, { useState } from "react";
import "./customer.css";

const Customers = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [selectedCustomers, setSelectedCustomers] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Number of items per page

  const customers = [
    {
      id: 1,
      name: "Test",
      email: "test@test123123123.com",
      status: "Enabled",
      createdAt: "Aug 22, 2024",
    },
    {
      id: 2,
      name: "eqkb",
      email: "kbkb@gmail.com",
      status: "disabled",
      createdAt: "Aug 21, 2024",
    },
    {
      id: 3,
      name: "Ganeswar",
      email: "ganeswar0114@gmail.com",
      status: "Enabled",
      createdAt: "Aug 21, 2024",
    },
    {
      id: 4,
      name: "admin",
      email: "nguyentruongnhathao1922@gmail.com",
      status: "disabled",
      createdAt: "Aug 21, 2024",
    },
    {
      id: 5,
      name: "jairo",
      email: "jairo@hotmail.com",
      status: "Enabled",
      createdAt: "Aug 20, 2024",
    },
    {
      id: 6,
      name: "Test",
      email: "test@test123123123.com",
      status: "Enabled",
      createdAt: "Aug 22, 2024",
    },
    {
      id: 7,
      name: "eqkb",
      email: "kbkb@gmail.com",
      status: "Enabled",
      createdAt: "Aug 21, 2024",
    },
    {
      id: 8,
      name: "Ganeswar",
      email: "ganeswar0114@gmail.com",
      status: "Disabled",
      createdAt: "Aug 21, 2024",
    },
    {
      id: 9,
      name: "admin",
      email: "nguyentruongnhathao1922@gmail.com",
      status: "Disabled",
      createdAt: "Aug 21, 2024",
    },
    {
      id: 10,
      name: "jairo",
      email: "jairo@hotmail.com",
      status: "Enabled",
      createdAt: "Aug 20, 2024",
    },
    {
      id: 11,
      name: "Test",
      email: "test@test123123123.com",
      status: "Enabled",
      createdAt: "Aug 22, 2024",
    },
    {
      id: 12,
      name: "eqkb",
      email: "kbkb@gmail.com",
      status: "Disabled",
      createdAt: "Aug 21, 2024",
    },
    {
      id: 13,
      name: "Ganeswar",
      email: "ganeswar0114@gmail.com",
      status: "Enabled",
      createdAt: "Aug 21, 2024",
    },
    {
      id: 14,
      name: "admin",
      email: "nguyentruongnhathao1922@gmail.com",
      status: "Enabled",
      createdAt: "Aug 21, 2024",
    },
    {
      id: 15,
      name: "jairo",
      email: "jairo@hotmail.com",
      status: "Disabled",
      createdAt: "Aug 20, 2024",
    },
  ];

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
  };

  const handleClearFilter = () => {
    setSearchQuery("");
    setStatusFilter("");
  };

  const toggleAllSelection = (e) => {
    if (e.target.checked) {
      const allCustomerIds = customers.map((customer) => customer.id);
      setSelectedCustomers(new Set(allCustomerIds));
    } else {
      setSelectedCustomers(new Set());
    }
  };

  const toggleCustomerSelection = (customerId) => {
    setSelectedCustomers((prevSelected) => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(customerId)) {
        newSelected.delete(customerId);
      } else {
        newSelected.add(customerId);
      }
      return newSelected;
    });
  };

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch = customer.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter
      ? customer.status === statusFilter
      : true;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredCustomers.length / itemsPerPage);
  const paginatedCustomers = filteredCustomers.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const selectedCount = selectedCustomers.size;

  return (
    <div className="customers-page">
      <h1 className="page-header">Customers</h1>

      <div className="filters">
        <input
          type="text"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
          className="search-box"
        />
        <select
          className="status-filter"
          value={statusFilter}
          onChange={handleStatusFilter}
        >
          <option value="">Status</option>
          <option value="Enabled">Enabled</option>
          <option value="Disabled">Disabled</option>
        </select>
        <button className="clear-filters" onClick={handleClearFilter}>
          Clear filter
        </button>
      </div>
      {/* customer table */}
      <div className="table-wrapper">
        <table className="customers-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" onChange={toggleAllSelection} />
              </th>
              <th>FULL NAME</th>
              <th>EMAIL</th>
              <th>STATUS</th>
              <th>CREATED AT</th>
            </tr>
            {selectedCount > 0 && (
              <tr>
                <td colSpan="5">
                  <div className="selection-actions">
                    <span>{selectedCount} row(s) selected</span>
                    <button className="action-button enable">Enable</button>
                    <button className="action-button disable">Disable</button>
                  </div>
                </td>
              </tr>
            )}
          </thead>
          <tbody>
            {paginatedCustomers.map((customer) => (
              <tr key={customer.id}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedCustomers.has(customer.id)}
                    onChange={() => toggleCustomerSelection(customer.id)}
                  />
                </td>
                <td>{customer.name}</td>
                <td>{customer.email}</td>
                <td>
                  <span
                    className={`status-indicator ${customer.status.toLowerCase()}`}
                  ></span>
                </td>
                <td>{customer.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination-control1">
          <button
            className="pagination-btn1"
            onClick={() => handlePageChange(1)}
            disabled={currentPage === 1}
          >
            &laquo;
          </button>
          <button
            className="pagination-btn1"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            &lsaquo;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`pagination-btn1 ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="pagination-btn1"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            &rsaquo;
          </button>
          <button
            className="pagination-btn1"
            onClick={() => handlePageChange(totalPages)}
            disabled={currentPage === totalPages}
          >
            &raquo;
          </button>
          <span id="total-record">{filteredCustomers.length} records</span>
        </div>
      </div>
    </div>
  );
};

export default Customers;
