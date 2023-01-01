import './App.css';
import './categoriesStyles.scss'
import Home from './routes/home/Home';
import { Routes, Route, } from 'react-router-dom'
import Navigation from './routes/Navigation/Navigation';
import Authentication from './routes/Authentication/Authentication';
import Shop from './routes/shop/Shop';
import Checkout from './routes/checkout/Checkout';


function App() {
  return(
    <Routes>
      <Route path='/' element={<Navigation />}>
{/* (index) makes the home component the "base component" */}
      <Route index element={<Home />}/>
      <Route path='shop' element={<Shop />} />
      <Route path='auth' element={<Authentication />} />
      <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  )
}

export default App;
