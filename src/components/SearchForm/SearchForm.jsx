import { useState } from 'react';
import { useDispatch } from 'react-redux';
import ImageResult from '../ImageResult/ImageResult';
import { Route } from 'react-router-dom/cjs/react-router-dom.min';

function SearchForm() {
  const dispatch = useDispatch();
  const [newSearch, setNewSearch] = useState({ name: '' });

  const handleSearch = (event) => {
    event.preventDefault();
    dispatch({ type: 'SEARCH_GIPHY', payload: newSearch });
    setNewSearch({ name: '' });
  };

  return (
    <form>
      <input
        id="search"
        placeholder="Search for giphy"
        type="text"
        value={newSearch.name}
        onChange={(event) =>
          setNewSearch({ ...newSearch, name: event.target.value })
        }
      />
      <button onClick={handleSearch}>Search</button>
    </form>
  );
}

export default SearchForm;
