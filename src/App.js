import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        {/*url 맨 뒤 값은 파라미터라서 가변적으로 변할 수 있다.
        id값을 안 넣으면 ProductPage가 나옴!*/}
      </Routes>
    </div>
  );
}

export default App;
