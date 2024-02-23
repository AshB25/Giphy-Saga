import SearchForm from '../SearchForm/SearchForm';
import ImageResult from '../ImageResult/ImageResult';
import { HashRouter as Router, Route } from 'react-router-dom';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const getCategory = () => {
    dispatch({ type: 'GET_' });
  };

  return (
    <div>
      <h1>Giphy Search!</h1>
      <SearchForm />
      <ImageResult />
      
      <Router>
        <Route path="/" exact>
          <Search />
        </Route>

        <Route path="/favorites" exact>
          <Favorites />
        </Route>
      </Router>

    </div>
  );
}

export default App;
