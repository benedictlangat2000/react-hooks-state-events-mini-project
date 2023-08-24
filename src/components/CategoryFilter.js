import React from "react";

function CategoryFilter(props) {
  const { categories, selectedCategory, onSelectCategory } = props;

  return (
    <div>
      <h3>Categories</h3>
      <div className="category-filter">
        {categories.map((category) => (
          <button
            key={category}
            className={category === selectedCategory ? "selected" : ""}
            onClick={() => onSelectCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}

export default CategoryFilter;
