import React from "react";

const Categories = ({ filterItems, allCategories }) => {
  return (
    <div className="btn-container">
      {allCategories.map((item, id) => {
        return (
          <button
            className="filter-btn"
            onClick={() => filterItems(item)}
            key={id}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
