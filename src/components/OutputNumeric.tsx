import * as React from 'react';

export interface Props {
	value: number;
}

const OutputNumeric: React.StatelessComponent<Props> = ({ value }) => (
	<output>
		{value}
	</output>
);

export default OutputNumeric;
