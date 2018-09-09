import * as React from 'react';
import SectionForces from './SectionForces';
import SectionSupport from './SectionSupport';

const App: React.StatelessComponent = () => (
	<div className="App">
		<h1>Pressure</h1>

		<h2>Values</h2>
		<SectionForces />

		<h2>Support</h2>
		<SectionSupport />
	</div>
);

export default App;
