import React, { useState, useEffect, useRef } from "react";
import "./collection.css";

const Collection = () => {
  // Extended dummy data
  const [collections] = useState([
    { id: 1, name: "New Arrival Products", code: "newarrival" },
    { id: 2, name: "Summer Collection", code: "summer2024" },
    { id: 3, name: "Winter Wear", code: "winter2024" },
    { id: 4, name: "Discounted Items", code: "discount2024" },
    { id: 5, name: "Exclusive Deals", code: "exclusive2024" },
    { id: 6, name: "Best Sellers", code: "bestsellers" },
    { id: 7, name: "Eco Friendly", code: "ecofriendly" },
    { id: 8, name: "Seasonal Specials", code: "seasonal2024" },
    { id: 9, name: "Limited Edition", code: "limitededition" },
    { id: 10, name: "Pre-Order", code: "preorder2024" },
    { id: 11, name: "Top Rated", code: "toprated" },
    { id: 12, name: "Gift Ideas", code: "giftideas" },
    { id: 13, name: "New Arrivals", code: "newarrivals" },
    { id: 14, name: "Popular Items", code: "popularitems" },
    { id: 15, name: "Featured Products", code: "featuredproducts" },
    { id: 16, name: "Holiday Collection", code: "holiday2024" },
    { id: 17, name: "Clearance Sale", code: "clearance2024" },
    { id: 18, name: "Custom Orders", code: "customorders" },
    { id: 19, name: "On Sale", code: "onsale" },
    { id: 20, name: "Back in Stock", code: "backinstock" },
    { id: 21, name: "Pre-Launch", code: "prelaunch" },
    { id: 22, name: "Anniversary Collection", code: "anniversary2024" },
    { id: 23, name: "Exclusive Releases", code: "exclusivereleases" },
    { id: 24, name: "Year-End Sale", code: "yearendsale" },
    { id: 25, name: "Graduation Gifts", code: "graduation2024" },
  ]);

  const [searchText, setSearchText] = useState("");
  const [selectedCollections, setSelectedCollections] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 20;

  const selectAllRef = useRef(null);

  const handleSearch = (e) => {
    setSearchText(e.target.value);
    setCurrentPage(1); // Reset to first page when search changes
  };

  const handleClearFilter = () => {
    setSearchText("");
    setSelectedCollections([]);
    setCurrentPage(1); // Reset to first page when clearing filter
  };

  const handleSelectCollection = (id) => {
    setSelectedCollections((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((collectionId) => collectionId !== id)
        : [...prevSelected, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedCollections.length === filteredCollections.length) {
      setSelectedCollections([]);
    } else {
      setSelectedCollections(
        filteredCollections.map((collection) => collection.id)
      );
    }
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Filter collections based on the search text
  const filteredCollections = collections.filter((collection) =>
    collection.name.toLowerCase().includes(searchText.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredCollections.length / itemsPerPage);

  // Get current page data
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCollections = filteredCollections.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Use useEffect to set the indeterminate state
  useEffect(() => {
    if (selectAllRef.current) {
      selectAllRef.current.indeterminate =
        selectedCollections.length > 0 &&
        selectedCollections.length < filteredCollections.length;
    }
  }, [selectedCollections, filteredCollections]);

  return (
    <div className="collection-wrapper">
      <div className="collection-header">
        <h2>Collections</h2>
        <button className="collection-create-button" onClick={() => {}}>
          New Collection
        </button>
      </div>

      <div className="collection-filter-bar">
        <input
          type="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearch}
          className="collection-search-input"
        />
        <a
          href="#"
          className="collection-clear-filter"
          onClick={(e) => {
            e.preventDefault();
            handleClearFilter();
          }}
        >
          Clear filter
        </a>
      </div>

      <table className="collection-table">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                ref={selectAllRef}
                onChange={handleSelectAll}
                checked={
                  currentCollections.length > 0 &&
                  selectedCollections.length === currentCollections.length
                }
              />
            </th>
            <th>ID</th>
            <th>COLLECTION NAME</th>
            <th>CODE</th>
          </tr>
        </thead>
        <tbody>
          {currentCollections.map((collection) => (
            <tr key={collection.id}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedCollections.includes(collection.id)}
                  onChange={() => handleSelectCollection(collection.id)}
                />
              </td>
              <td>{collection.id}</td>
              <td>{collection.name}</td>
              <td>{collection.code}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="collection-pagination">
        <button
          className="pagination-button"
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lsaquo;
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            className={`pagination-button ${
              currentPage === index + 1 ? "active" : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="pagination-button"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &rsaquo;
        </button>
        <button
          className="pagination-button"
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
        >
          &raquo;
        </button>
        <span className="collection-total-records">
          {filteredCollections.length} records
        </span>
      </div>
    </div>
  );
};

export default Collection;
