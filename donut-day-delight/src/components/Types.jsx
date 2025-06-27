import React from 'react';

const donutTypes = [
  'Glazed',
  'Chocolate Frosted',
  'Jelly-Filled',
  'Sprinkled',
  'Boston Cream',
  'Powdered Sugar',
];

function Types() {
  return (
    <section>
      <h2>Types of Donuts</h2>
      <div className="donut-types-grid">
        {donutTypes.map((type) => (
          <button className="donut-type-card" key={type}>{type}</button>
        ))}
      </div>
    </section>
  );
}

export default Types;