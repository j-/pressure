import { connect, MapStateToProps } from 'react-redux';
import JSONPrimitive from '../components/JSONPrimitive';
import { ReducerState, getMaxForce } from '../store';

interface StateProps {
	value: number;
}

const mapStateToProps: MapStateToProps<StateProps, void, ReducerState> = (state) => ({
	value: getMaxForce(state),
});

export default connect(
	mapStateToProps,
)(JSONPrimitive);
