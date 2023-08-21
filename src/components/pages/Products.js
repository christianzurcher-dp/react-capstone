import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products({ products, categories, addToCart }) {
  const [prodSort, setProdSort] = useState("default");
  const [prodFilter, setProdFilter] = useState(categories);
  const [searchValue, setsearchValue] = useState("");

  if (prodSort === "default") {
    products.sort((a, b) => a.id - b.id);
  } else if (prodSort === "low-high") {
    products.sort((a, b) => a.price - b.price);
  } else if (prodSort === "high-low") {
    products.sort((a, b) => b.price - a.price);
  } else if (prodSort === "a-z") {
    products.sort((a, b) => a.title.localeCompare(b.title));
  } else if (prodSort === "z-a") {
    products.sort((a, b) => b.title.localeCompare(a.title));
  }

  const truncate = (words, maxLength) => {
    if (words.length > maxLength) {
      return `${words.slice(0, maxLength)} …`;
    }
    return words;
  };

  const handleChange = (e) => {
    prodFilter.includes(e.target.value)
      ? setProdFilter(prodFilter.filter((c) => c !== e.target.value))
      : setProdFilter([...prodFilter, e.target.value]);
  };

  const renderFilters = categories.map((category) => {
    return (
      <div className="category">
        <input
          type="checkbox"
          id={category}
          value={category}
          checked={prodFilter.includes(category)}
          onChange={handleChange}
        />
        <label htmlFor={category}>{category}</label>
      </div>
    );
  });

  const renderProducts = products.map((product) => {
    console.log(prodFilter);

    if (
      prodFilter.includes(product.category) &&
      product.title.includes(searchValue)
    ) {
      return (
        <div className="product">
          <div className="link">
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.category} />
              <div className="product-info">
                <div className="title">{truncate(product.title, 50)}</div>
                <div className="description">
                  {truncate(product.description, 40)}
                </div>
                <div className="price">${product.price}</div>
              </div>
            </Link>
          </div>
          <div className="add-cart">
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        </div>
      );
    }
  });

  return (
    <div className="products">
      <div className="sort-and-filter-container">
        <div className="sort-options">
          <p>Sort options:&nbsp;</p>
          <select
            onChange={(e) => setProdSort(e.target.value)}
            value={prodSort}
          >
            <option value="default">Default</option>
            <option value="low-high">Price: Low to High</option>
            <option value="high-low">Price: High to Low</option>
            <option value="a-z">Alphabetical: A to Z</option>
            <option value="z-a">Alphabetical: Z to A</option>
          </select>
        </div>
        <div className="filter-options">
          <p>filter options:&nbsp;</p>
          {renderFilters}
        </div>
        <div className="search-option">
          <p>search:&nbsp;</p>
          <input
            type="text"
            value={searchValue}
            onChange={(input) => setsearchValue(input.target.value)}
          />
        </div>
      </div>
      <div className="product-list">{renderProducts}</div>
    </div>
  );
}
