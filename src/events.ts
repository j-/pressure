import { fromEvent } from 'rxjs';
import { Dispatch } from 'redux';

import {
	ActionForceChanged,
	ActionMousedownChanged,
	forceChanged,
	mousedown,
	mouseup,
} from './store/actions';

const forceChangedEvents = fromEvent<MouseEvent>(window, 'webkitmouseforcechanged');
const mouseDownEvents = fromEvent<MouseEvent>(window, 'mousedown');
const mouseUpEvents = fromEvent<MouseEvent>(window, 'mouseupevent');

type RequiredActions = (
	ActionForceChanged |
	ActionMousedownChanged
);

export const mount = (dispatch: Dispatch<RequiredActions>) => {
	const forceChangedSubscription = forceChangedEvents.subscribe((e) => {
		dispatch(
			forceChanged(e['webkitForce'])
		);
	});

	const mouseDownSubscription = mouseDownEvents.subscribe(() => (
		dispatch(mousedown())
	));

	const mouseUpSubscription = mouseUpEvents.subscribe(() => (
		dispatch(mouseup())
	));

	// Return unmount
	return () => {
		forceChangedSubscription.unsubscribe();
		mouseDownSubscription.unsubscribe();
		mouseUpSubscription.unsubscribe();
	};
};
