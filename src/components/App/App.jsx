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

      <Search />

      <Favorites />
    </div>
  );
}

export default App;
