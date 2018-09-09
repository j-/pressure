export const SUPPORT_WEBKITMOUSEFORCECHANGED = (
	typeof window['onwebkitmouseforcechanged'] !== 'undefined'
);

export const SUPPORT_WEBKITMOUSEFORCEDOWN = (
	typeof window['onwebkitmouseforcedown'] !== 'undefined'
);

export const SUPPORT_WEBKITMOUSEFORCEUP = (
	typeof window['onwebkitmouseforceup'] !== 'undefined'
);

export const SUPPORT_WEBKITMOUSEFORCEWILLBEGIN = (
	typeof window['onwebkitmouseforcewillbegin'] !== 'undefined'
);

export const SUPPORT_WEBKITFORCE = (
	typeof (new MouseEvent('')).webkitForce !== 'undefined'
);
