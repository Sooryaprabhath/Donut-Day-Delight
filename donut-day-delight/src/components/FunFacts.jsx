import React from 'react';

const facts = [
	{ emoji: '🍩', text: 'Over 10 billion donuts are made in the U.S. each year!' },
	{ emoji: '🇨🇦', text: 'Canada has more donut shops per capita than any other country.' },
	{ emoji: '⚖️', text: 'The largest donut ever made weighed 1.7 tons!' },
];

function FunFacts() {
	return (
		<section>
			<h2>Fun Facts</h2>
			{facts.map((fact, idx) => (
				<div className='fun-fact' key={idx}>
					<span
						className='fun-fact-emoji'
						role='img'
						aria-label='fact-emoji'
					>
						{fact.emoji}
					</span>
					<span>{fact.text}</span>
				</div>
			))}
		</section>
	);
}

export default FunFacts;