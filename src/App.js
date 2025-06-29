import { Provider } from 'react-redux';
import { Home } from './sewaInBraj/Home/Home';
import {NavigatedPages} from './sewaInBraj/NavigatedPages/NavigatedPages.jsx';
import { store } from './sewaInBraj/app/store/responseStore';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProductInfo } from './sewaInBraj/ProductInfo/ProductInfo.jsx';
import { Shop } from './Shoping/Shop.jsx';

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
