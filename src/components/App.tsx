import * as React from 'react';
import ForceCurrent from '../containers/ForceCurrent';
import ForceMax from '../containers/ForceMax';
import ForceAtMouseDown from '../containers/ForceAtMouseDown';
import ForceAtForceMouseDown from '../containers/ForceAtForceMouseDown';

const App: React.StatelessComponent = () => (
	<div className="App">
		<h1>Pressure</h1>
		<dl>
			<dt>Force (current)</dt>
			<dd><ForceCurrent /></dd>

			<dt>Force (max)</dt>
			<dd><ForceMax /></dd>

			<dt>Force at mouse down</dt>
			<dd><ForceAtMouseDown /></dd>

			<dt>Force at force mouse down</dt>
			<dd><ForceAtForceMouseDown /></dd>
		</dl>
	</div>
);

export default App;
