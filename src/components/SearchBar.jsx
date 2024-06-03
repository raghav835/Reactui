import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './SearchBar.css';

function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
    if (event.target.value.length > 2) {
      axios.get(`https://fakestoreapi.com/products`)
        .then(response => {
          const filteredResults = response.data.filter(product =>
            product.title.toLowerCase().includes(event.target.value.toLowerCase())
          );
          setResults(filteredResults);
        })
        .catch(error => {
          console.error('Error fetching search results:', error);
        });
    } else {
      setResults([]);
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Search products..."
      />
      {results.length > 0 && (
        <ul className="search-results">
          {results.map(result => (
            <li key={result.id}>
              <Link to={`/product/${result.id}`}>{result.title}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
