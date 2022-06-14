import { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';

const App = () => {
  useEffect(() => {
    const animations = [
      document.getElementById('about')
    ];

    animations.forEach(e => {
      e.classList.add('transition', 'hidden');
    });

    document.getElementById('home').classList.remove('hidden');
    document.getElementById('home').classList.add('visible');

    window.addEventListener('scroll', () => {
      animations.forEach(e => {
        const rect = e.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < (window.innerHeight || document.documentElement.clientHeight) / 1.5) {
          e.classList.remove('hidden');
          e.classList.add('visible');
        };
      });
    });
  }, []);

  return (
    <div className="app">
      <Header />
      <Home />
      <About />
    </div>
  );
};

export default App;