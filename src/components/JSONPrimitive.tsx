import * as React from 'react';
import JSONNumber from './JSONNumber';
import JSONUndefined from './JSONUndefined';

export interface Props {
	value: number | undefined;
}

const JSONPrimitive: React.StatelessComponent<Props> = ({ value }) => (
	typeof value === 'number' ? <JSONNumber value={value} /> :
	typeof value === 'undefined' ? <JSONUndefined /> :
	null
);

export default JSONPrimitive;
