import * as React from 'react';

const SectionSupport: React.StatelessComponent = () => (
	<section className="SectionSupport">
		<dl>
			<dt>Support detected for <code>webkitmouseforcechanged</code></dt>
			<dd>{typeof window['onwebkitmouseforcechanged'] !== 'undefined' ? 'Yes' : 'No'}</dd>

			<dt>Support detected for <code>webkitmouseforcedown</code></dt>
			<dd>{typeof window['onwebkitmouseforcedown'] !== 'undefined' ? 'Yes' : 'No'}</dd>

			<dt>Support detected for <code>webkitmouseforceup</code></dt>
			<dd>{typeof window['onwebkitmouseforceup'] !== 'undefined' ? 'Yes' : 'No'}</dd>

			<dt>Support detected for <code>webkitmouseforcewillbegin</code></dt>
			<dd>{typeof window['onwebkitmouseforcewillbegin'] !== 'undefined' ? 'Yes' : 'No'}</dd>

			<dt>Support detected for <code>MouseEvent.prototype.webkitForce</code></dt>
			<dd>{typeof (new MouseEvent('')).webkitForce !== 'undefined' ? 'Yes' : 'No'}</dd>
		</dl>
	</section>
);

export default SectionSupport;
