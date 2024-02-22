import { HashRouter as Router, Route } from 'react-router-dom';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';

function App() {
  return (
    <div>
      <h1>Giphy Search!</h1>
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
