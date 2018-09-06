import * as React from 'react';
import Force from '../containers/Force';
import ForceAtMouseDown from '../containers/ForceAtMouseDown';
import ForceAtForceMouseDown from '../containers/ForceAtForceMouseDown';

const App: React.StatelessComponent = () => (
	<div className="App">
		<p>Force: <Force /></p>
		<p>Force at mouse down: <ForceAtMouseDown /></p>
		<p>Force at force mouse down: <ForceAtForceMouseDown /></p>
	</div>
);

export default App;
