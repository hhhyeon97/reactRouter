import { useState } from 'react';
import './App.css';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import ProductPage from './page/ProductPage';
import ProductDetailPage from './page/ProductDetailPage';
import LoginPage from './page/LoginPage';
import UserPage from './page/UserPage';
import { Routes, Route, Navigate } from 'react-router-dom';

function App() {
  // 로그인 유무 가정하는 상태
  const [authenticate, setAuthenticate] = useState(true);
  // PrivateRoute는 함수 아니고 컴포넌트임 ! 대문자로 시작했음
  const PrivateRoute = () => {
    return authenticate == true ? (
      <UserPage />
    ) : (
      <Navigate to="/login" replace />
    );
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/products/:id" element={<ProductDetailPage />} />
        {/*url 맨 뒤 값은 파라미터라서 가변적으로 변할 수 있다.
        id값을 안 넣으면 ProductPage가 나옴!*/}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<PrivateRoute />} />
      </Routes>
    </div>
  );
}

export default App;
