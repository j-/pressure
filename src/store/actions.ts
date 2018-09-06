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
