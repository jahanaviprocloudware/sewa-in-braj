import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './sewaInBraj/app/store/responseStore';
import { NavigatedPages } from './sewaInBraj/NavigatedPages/NavigatedPages.jsx';

function App() {
  return (
    <Provider store={store}>
       <BrowserRouter>
      <NavigatedPages/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
