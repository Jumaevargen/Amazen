import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';
import Hero from './components/Pages/Hero/Hero';

function App() {
  return (
    <div className='APP-WRAPPER'>
      <Header />

      <main>
        <Hero />
      </main>

      <Footer />
    </div>
  );
}

export default App;
