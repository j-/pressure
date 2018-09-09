import * as React from 'react';
import ForceCurrent from '../containers/ForceCurrent';
import ForceMax from '../containers/ForceMax';
import ForceAtMouseDown from '../containers/ForceAtMouseDown';
import ForceAtForceMouseDown from '../containers/ForceAtForceMouseDown';

const SectionForces: React.StatelessComponent = () => (
	<section className="SectionForces">
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
	</section>
);

export default SectionForces;
