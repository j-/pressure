import { Reducer } from 'redux';
import { isActionForceChanged } from './actions';

export interface ReducerState {
	force: number;
	forceAtForceMouseDown?: number;
	forceAtMouseDown?: number;
	maxForce: number;
}

declare var MouseEvent: MouseEvent;

const DEFAULT_STATE: ReducerState = {
	force: 0,
	forceAtForceMouseDown: MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN,
	forceAtMouseDown: MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN,
	maxForce: 0,
};

export const getForce = (state: ReducerState) => (
	state.force
);

export const getForceAtForceMouseDown = (state: ReducerState) => (
	state.forceAtForceMouseDown
);

export const getForceAtMouseDown = (state: ReducerState) => (
	state.forceAtMouseDown
);

export const getMaxForce = (state: ReducerState) => (
	state.maxForce
);

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionForceChanged(action)) {
		const { force } = action.data;
		const { maxForce } = state;
		return {
			...state,
			force,
			maxForce: Math.max(force, maxForce),
		};
	}

	return state;
};

export default reducer;
