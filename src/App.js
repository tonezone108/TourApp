import Navigation from './components/Navigation'
import Router from './Router'
import {BrowserRouter} from 'react-router-dom'
import {Provider } from "react-redux";
import store from "./redux/store";
import './App.css';
//test commit again
function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navigation/>
    <Router/>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
