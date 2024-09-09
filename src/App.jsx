import Navbar from './Components/Navbar'
import {Route, Routes} from 'react-router-dom';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>

      <Footer/>

    </div>
  );
};

export default App;
