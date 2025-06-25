import { Provider } from 'react-redux';
import { Home } from './sewaInBraj/Home/Home';
import {NavigatedPages} from './sewaInBraj/NavigatedPages/NavigatedPages.jsx';
import { store } from './sewaInBraj/app/store/responseStore';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <NavigatedPages/>
    </Provider>
  );
}

export default App;
