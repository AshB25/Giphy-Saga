import SearchForm from "../SearchForm/SearchForm";
import ImageResult from "../ImageResult/ImageResult";
import { HashRouter as Router, Route } from "react-router-dom";
import Favorites from "../Favorites/Favorites";
import './App.css';
import { useDispatch, useSelector } from "react-redux";


function App() {
  const getCategory = () => {
    dispatch({ type: "GET_" });
  };

  return (
    <div>
      <Router>
        <h1>Giphy Search!</h1>
        <SearchForm />
        <ImageResult />

        <Route path="/favorites" exact>
          <Favorites />
        </Route>
      </Router>
    </div>
  );
}

export default App;
