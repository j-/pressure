import * as React from 'react';
import Force from '../containers/Force';
import ForceAtMouseDown from '../containers/ForceAtMouseDown';
import ForceAtForceMouseDown from '../containers/ForceAtForceMouseDown';
import MaxForce from '../containers/MaxForce';

const App: React.StatelessComponent = () => (
	<div className="App">
		<p>Force (current): <Force /></p>
		<p>Force (max): <MaxForce /></p>
		<p>Force at mouse down: <ForceAtMouseDown /></p>
		<p>Force at force mouse down: <ForceAtForceMouseDown /></p>
	</div>
);

export default App;
