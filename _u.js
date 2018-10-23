_u = {
	defVal: (input, defaultValue) => typeof input === 'undefined' || input === null || input === '' ? defaultValue : input,
	sl: selector => document.querySelector(selector),
	find: (el, selector) => el.querySelectorAll(selector),
	find1: (el, selector) => {
		const res = el.querySelectorAll(selector);
		if (res.length === 1) {
			return res[0];
		}
		return res;
	},
	addClass: (el, className) => el.classList.add(className),
	removeClass: (el, className) => {
		el.classList.remove(className);
	},
	each: (target, action) => {
		let i;
		let index = 0;
		let key;
		if (!isNaN(target)) {
			for (i = 0; i < target; i += 1) {
				action(i);
			}
		} else if (target instanceof Array) {
			const len = target.length;
			for (i = 0; i < len; i += 1) {
				action(target[i], i);
			}
		} else {
			for (key in target) {
				if (target[key]) {
					action(target[key], key, index);
					index++;
				}
			}
		}
	},
	bb: target => target.getBoundingClientRect(),
	width: target => target.offsetWidth,
	height: target => target.offsetHeight,
	size: obj => Object.keys(obj).length,
	first: obj => obj[Object.keys(obj)[0]],
	clone: obj => {
		let rv;
		try {
			rv = JSON.parse(JSON.stringify(obj));
		} catch (err) {
			rv = obj;
		}
		return rv;
	},
	objectToArray: obj => {
		const arr = [];
		_u.each(obj, (o, key) => {
			o.key = key;
			arr.push(o);
		});
		return arr;
	},
	arrayToObject: arr => {
		const obj = {};
		_u.each(arr, key => {
			obj[key] = key;
		});
		return obj;
	},
	sortByKey: (array, key, order) => {
		return array.sort((a, b) => {
			const x = typeof a[key].getMonth === 'function' ? a[key].getTime() : a[key];

			const y = typeof b[key].getMonth === 'function' ? b[key].getTime() : b[key];

			if (order === 'desc') {
				return x > y ? -1 : x < y ? 1 : 0;
			}
			return x < y ? -1 : x > y ? 1 : 0;
		});
	},
	rand: (from, to) => {
		return Math.floor(Math.random() * (to - from + 1) + from);
	},
	randFloat: (from, to) => {
		return (Math.random() * (to - from) + from).toFixed(4);
	},
	randFromArray: array => {
		return array[Math.floor(Math.random() * array.length)];
	},
	round: (number, decimals) => {
		const d = 10 * decimals;
		return (((number * d + 0.5) << 1) >> 1) / d;
	},
	trigger: (name, data) => {
		window.dispatchEvent(
			new CustomEvent(name, {
				detail: data,
			})
		);
	},
	listen: (name, onFn) => {
		window.addEventListener(name, onFn, false);
	},
	stopListen: (name, onFn) => {
		window.removeEventListener(name, onFn, false);
	},
	now: () => {
		return performance.now() || Date.now();
	},
	isMobile: () => {
		return /Mobi/i.test(navigator.userAgent) || /Android/i.test(navigator.userAgent);
	},
	isMac: () => {
		return navigator.platform.toUpperCase().indexOf('MAC') >= 0;
	},
	loadJSON: (path, success, error) => {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = () => {
			if (xhr.readyState === XMLHttpRequest.DONE) {
				if (xhr.status === 200) {
					if (success)
						success(JSON.parse(xhr.responseText));
				} else {
					if (error)
						error(xhr);
				}
			}
		};
		xhr.open("GET", path, true);
		xhr.send();
	},
	idIndex: 0,
	getId: () => {
		return (
			_u
			.now()
			.toString(36)
			.replace('.', '') + (_u.idIndex++ % 1024).toString(36)
		);
	},
	pathToId: val => {
		val = val.toLowerCase();
		val = val.replace(/[^(!_)a-zA-Z 0-9]+/g, '');
		val = val.replace(/^\s+|\s+$/gm, '');
		return val;
	},
	stringCast: => (s) {
		if (typeof s !== 'string') {
			return s;
		}

		const check = function (s) {
			if (s.toLowerCase() === 'true') {
				return true;
			}
			if (s.toLowerCase() === 'false') {
				return false;
			}
			if (!isNaN(s.replace(',', '.'))) {
				s = s.replace(',', '.');
				if (s.indexOf('.')) {
					return parseFloat(s);
				}
				return parseInt(s);
			}
			return s;
		};

		if (s === '') {
			return '';
		}

		if (s.indexOf('{') === -1) {
			return check(s);
		}

		try {
			const o = JSON.parse(s);
			if (o && typeof o === 'object' && o !== null) {
				return o;
			}
		} catch (e) {
			check(s);
		}
	},
	prettyJSON: (jsObj) => {
		JSON.stringify(jsObj, null, "\t");
	},
};