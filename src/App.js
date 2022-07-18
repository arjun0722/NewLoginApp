import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Details from './components/details/Details';

import {Routes,Route} from "react-router-dom"

function App() {
  return (
  <>
    
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/details' element={<Details />} />
    
    </Routes>
  </>
  );
}

export default App;
