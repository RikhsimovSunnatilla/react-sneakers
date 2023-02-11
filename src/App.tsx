import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/home';
import CartDrawer from './components/CartDrawer';
import Header from './components/Header';

function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  function openDrawer() {
    setIsDrawerOpen(true);
  }

  function closeDrawer() {
    setIsDrawerOpen(false);
  }

  // DONE: Drawer animation
  // TODO: Drawer button icon
  // TODO: Add and Save button icon

  return (
    <div className="container my-11 rounded-3xl bg-white shadow-md">
      <Header openDrawer={openDrawer} />

      <CartDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
