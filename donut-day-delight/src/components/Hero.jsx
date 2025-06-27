import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <header className="hero">
      <div className="donut-animation">
        <span className="donut donut1" role="img" aria-label="donut">🍩</span>
        <span className="donut donut2" role="img" aria-label="donut">🍩</span>
        <span className="donut donut3" role="img" aria-label="donut">🍩</span>
      </div>
      <h1>🍩 Donut Day Delight</h1>
      <p>Celebrating National Donut Day with fun, flavor, and facts!</p>
    </header>
  );
}

export default Hero;