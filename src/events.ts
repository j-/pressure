import { fromEvent } from 'rxjs';
import { Dispatch } from 'redux';
import { ActionForceChanged, forceChanged } from './store/actions';

const forceChangedEvents = fromEvent<MouseEvent>(window, 'webkitmouseforcechanged');

export const mount = (dispatch: Dispatch<ActionForceChanged>) => {
	const forceChangedSubscription = forceChangedEvents.subscribe((e) => {
		dispatch(
			forceChanged(e['webkitForce'])
		);
	});

	// Return unmount
	return () => {
		forceChangedSubscription.unsubscribe();
	};
};
