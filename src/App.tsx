import { Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/home';

function App() {
  return (
    <div className="container my-11 rounded-3xl bg-white shadow-md ">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
