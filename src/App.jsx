import { useState } from 'react';
import { MobileNavigation, Navigation } from './components';
import { Home } from './pages';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => setIsMenuOpen(true);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {isMenuOpen && <MobileNavigation closeMenu={closeMenu} />}
      <Navigation openMenu={openMenu} />
      <Home />
    </>
  );
}

export default App;
