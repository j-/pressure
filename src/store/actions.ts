import { Action } from 'redux';

export interface ActionForceChanged extends Action {
	type: 'ForceChanged';
	data: {
		force: number;
	};
}

export const isActionForceChanged = (action: Action): action is ActionForceChanged => (
	action.type === 'ForceChanged'
);

export const forceChanged = (force: number): ActionForceChanged => ({
	type: 'ForceChanged',
	data: {
		force,
	},
});

export interface ActionMousedownChanged extends Action {
	type: 'MouseDownChanged',
	data: {
		mousedown: boolean;
	};
}

export const isActionMousedownChanged = (action: Action): action is ActionMousedownChanged => (
	action.type === 'MousedownChanged'
);

export const mousedown = (): ActionMousedownChanged => ({
	type: 'MouseDownChanged',
	data: {
		mousedown: true,
	},
});

export const mouseup = (): ActionMousedownChanged => ({
	type: 'MouseDownChanged',
	data: {
		mousedown: false,
	},
});
