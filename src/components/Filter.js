import React from "react";

function Filter({ onCategoryChange, onSearchChange, selectedCategory, search }) {
  return (
    <div className="Filter">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearchChange(e.target.value)}
        value={search}
      />
      <select onChange={onCategoryChange} value={selectedCategory}>
        <option value="All">All</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
