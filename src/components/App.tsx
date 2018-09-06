import * as React from 'react';
import Force from '../containers/Force';
import ForceAtMouseDown from '../containers/ForceAtMouseDown';
import ForceAtForceMouseDown from '../containers/ForceAtForceMouseDown';
import MaxForce from '../containers/MaxForce';

const App: React.StatelessComponent = () => (
	<div className="App">
		<dl>
			<dt>Force (current)</dt>
			<dd><Force /></dd>

			<dt>Force (max)</dt>
			<dd><MaxForce /></dd>

			<dt>Force at mouse down</dt>
			<dd><ForceAtMouseDown /></dd>

			<dt>Force at force mouse down</dt>
			<dd><ForceAtForceMouseDown /></dd>
		</dl>
	</div>
);

export default App;
