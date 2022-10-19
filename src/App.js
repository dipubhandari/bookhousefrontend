import logo from './logo.svg';
import './App.css';
import Home from './component/banner/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Admin from './admin/admin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes >
          <Route path='/' element={<Home />} ></Route>
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
