import SearchForm from '../SearchForm/SearchForm';
import ImageResult from '../ImageResult/ImageResult';
import Navigation from '../Navigation/Navigation';
import { HashRouter as Router, Route } from 'react-router-dom';
import Favorites from '../Favorites/Favorites';
import '../App/App.css'

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact>
          <h1>Giphy Search!</h1>
          <Navigation />
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
