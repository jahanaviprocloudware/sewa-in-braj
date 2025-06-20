import { Provider } from 'react-redux';
import { Home } from './sewaInBraj/Home/Home';
import { store } from './sewaInBraj/app/store/responseStore';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

export default App;
