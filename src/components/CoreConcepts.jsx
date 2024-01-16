import React from 'react';
import { CORE_CONCEPTS } from '../data.js';
import CoreConcept from './CoreConcept.jsx';
const CoreConcepts = () => {
	return (
		<div>
			<section id="core-concepts">
				<h2>Core Concepts</h2>
				<ul>
					{CORE_CONCEPTS.map((conceptItem) => (
						<CoreConcept key={conceptItem.title} {...conceptItem} />
					))}
				</ul>
			</section>
		</div>
	);
};

export default CoreConcepts;
