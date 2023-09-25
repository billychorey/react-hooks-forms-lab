import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  function handleItemFormSubmit(newItem) {
    // Handle the form submission logic here
    console.log("New item submitted:", newItem);
    // You can update the 'items' state or send data to an API as needed
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(term) {
    setSearchTerm(term);
  }

  const filteredItems = items.filter((item) => {
    const categoryMatches =
      selectedCategory === "All" || item.category === selectedCategory;
    const textMatches = item.name.toLowerCase().includes(searchTerm.toLowerCase());

    return categoryMatches && textMatches;
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter
        onCategoryChange={handleCategoryChange}
        onSearchChange={handleSearchChange}
        selectedCategory={selectedCategory}
        search={searchTerm}
      />
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
