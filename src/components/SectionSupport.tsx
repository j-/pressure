import * as React from 'react';

import {
	SUPPORT_WEBKITMOUSEFORCECHANGED,
	SUPPORT_WEBKITMOUSEFORCEDOWN,
	SUPPORT_WEBKITMOUSEFORCEUP,
	SUPPORT_WEBKITMOUSEFORCEWILLBEGIN,
	SUPPORT_WEBKITFORCE,
} from '../support';

const SectionSupport: React.StatelessComponent = () => (
	<section className="SectionSupport">
		<dl>
			<dt>Support detected for <code>webkitmouseforcechanged</code></dt>
			<dd>{SUPPORT_WEBKITMOUSEFORCECHANGED ? 'Yes' : 'No'}</dd>

			<dt>Support detected for <code>webkitmouseforcedown</code></dt>
			<dd>{SUPPORT_WEBKITMOUSEFORCEDOWN ? 'Yes' : 'No'}</dd>

			<dt>Support detected for <code>webkitmouseforceup</code></dt>
			<dd>{SUPPORT_WEBKITMOUSEFORCEUP ? 'Yes' : 'No'}</dd>

			<dt>Support detected for <code>webkitmouseforcewillbegin</code></dt>
			<dd>{SUPPORT_WEBKITMOUSEFORCEWILLBEGIN ? 'Yes' : 'No'}</dd>

			<dt>Support detected for <code>MouseEvent.prototype.webkitForce</code></dt>
			<dd>{SUPPORT_WEBKITFORCE ? 'Yes' : 'No'}</dd>
		</dl>
	</section>
);

export default SectionSupport;
