import { Route, Routes } from 'react-router-dom'; // правильный импорт
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Arrivel from './components/Pages/Arrivel/Arrivel';
import Card from './components/Pages/Card/Card';
import Hero from './components/Pages/Hero/Hero';
import Regist from './components/Pages/Regist/Regist';
import Shop from './components/Pages/Shop/Shop';
import SALE from './components/Layout/SALE/SALE';

function App() {
  return (
    <div className='APP-WRAPPER'>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Shop/>
              <Arrivel/>
              <Card/>
              <Regist/>
            </>
          } />
          <Route path="/sale" element={<SALE />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;