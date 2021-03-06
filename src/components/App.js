import { useEffect } from 'react';
import Header from './Header';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import TopButton from './TopButton';

const App = () => {
  useEffect(() => {
    const animations = [
      document.getElementById('skills'),
      Array.from(document.querySelectorAll('.card')) // Convert NodeList to array
    ].flat(); // Flatten nested array

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
      <main>
        <Home />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <TopButton />
    </div>
  );
};

export default App;