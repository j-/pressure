import * as React from 'react';

export interface Props {
	value: number;
}

const JSONNumber: React.StatelessComponent<Props> = ({ value }) => (
	<code className="JSONNumber">{value}</code>
);

export default JSONNumber;
