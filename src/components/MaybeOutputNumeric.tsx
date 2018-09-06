import * as React from 'react';
import OutputNumeric from './OutputNumeric';

export interface Props {
	value?: number;
}

const MaybeOutputNumeric: React.StatelessComponent<Props> = ({ value }) => (
	!value ? null : <OutputNumeric value={value} />
);

export default MaybeOutputNumeric;
