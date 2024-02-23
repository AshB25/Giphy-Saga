
import SearchForm from '../SearchForm/SearchForm';
import ImageResult from '../ImageResult/ImageResult';
import Navigation from '../Navigation/Navigation';
import { HashRouter as Router, Route } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact>
          <Navigation />
          <h1>Giphy Search!</h1>
          <SearchForm />
          <ImageResult />
        </Route>


        <Route path="/favorites" exact>
          <Favorites />
        </Route>
      </Router>
    </div>
  );
}

export default App;
