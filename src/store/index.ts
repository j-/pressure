import { Reducer } from 'redux';
import { isActionForceChanged } from './actions';

export interface ReducerState {
	force: number;
	forceAtForceMouseDown?: number;
	forceAtMouseDown?: number;
}

declare var MouseEvent: MouseEvent;

const DEFAULT_STATE: ReducerState = {
	force: 0,
	forceAtForceMouseDown: MouseEvent.WEBKIT_FORCE_AT_FORCE_MOUSE_DOWN,
	forceAtMouseDown: MouseEvent.WEBKIT_FORCE_AT_MOUSE_DOWN,
};

export const getForce = (state: ReducerState) => (
	state.force
);

const reducer: Reducer<ReducerState> = (state = DEFAULT_STATE, action) => {
	if (isActionForceChanged(action)) {
		return {
			...state,
			force: action.data.force,
		};
	}

	return state;
};

export default reducer;
