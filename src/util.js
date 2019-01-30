/**
 *
 * Uppercase first letter in a word
 *
 * @param {string} word
 */
export const uppercaseFirst = word =>
	`${word.charAt(0).toUpperCase()}${word.substring(1)}`;

/**
 *
 * Generate unique id
 */
export function guid() {
	function s4() {
		return Math.floor((1 + Math.random()) * 0x10000)
			.toString(16)
			.substring(1);
	}
	return [s4() + s4(), s4(), s4(), s4(), s4() + s4() + s4()].join('-');
}

/**
 *
 * Calculate current viewport width
 */

export const windowMaxWidth = () =>
	Math.max(
		document.documentElement.clientWidth,
		window.innerWidth /* istanbul ignore next */ || 0
	);

/**
 *
 * Calculate current viewport height
 */

export const windowMaxHeight = () =>
	Math.max(
		document.documentElement.clientHeight,
		window.innerHeight /* istanbul ignore next */ || 0
	);

/**
 *
 * Check if browser agent is ios
 */

export const checkBrowserAgent = () => /* istanbul ignore next */ {
	// Detects if device is on iOS
	const isIos = () => {
		const userAgent = window.navigator.userAgent.toLowerCase();
		return /iphone|ipad|ipod/.test(userAgent);
	};

	if (isIos()) {
		return 'ios';
	}

	return 'web';
};
