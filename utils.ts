// import axios from "./axios";
// import Cookies from 'js-cookie';

// work with numbers
export const persianToEnglishDigits = (digit: number | string): string =>
	String(digit)
		.replace(/[٠-٩]/g, (d) => '٠١٢٣٤٥٦٧٨٩'.indexOf(d).toString()) // Convert to string
		.replace(/[۰-۹]/g, (d) => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d).toString()); // Convert to string

export const preventNumbersTyping = (str: string): string => str.replace(/[0-9]/g, '');
export const preventLettersTyping = (str: string): string => str.replace(/\D/g, '');

export const setNumberDigitAndPreventLettersTypes = (value: string | number): string => {
	return preventLettersTyping(persianToEnglishDigits(value));
};

// validation
export const validateEmail = (email: string): RegExpMatchArray | null => {
	return String(email)
		.toLowerCase()
		.match(/^[A-Za-z0-9._%+-]{2,}@[A-Za-z0-9.-_]{2,}\.[A-Za-z]{2,}$/);
};
export const phoneValidation = (value: string): boolean => {
	if (value.length !== 11) return false;
	if (!value.startsWith('09')) return false;
	return true;
};

// for handling persian or english text direction
export const isPersian = (str: string): boolean => {
	const PersianASCII: RegExp = /[آ-ی]|([a-zA-Z])/;

	if (str.match(PersianASCII) !== null) {
		if (str.match(PersianASCII)![1]) {
			return false;
		}
		return true;
	}
	return true;
};

// detect device mode
export const Android = () => {
	const ua = window.navigator.userAgent.toLowerCase();
	return ua.indexOf('android') > -1;
};
export const IOS = () =>
	['iPad Simulator', 'iPhone Simulator', 'iPod Simulator', 'iPad', 'iPhone', 'iPod'].includes(window.navigator.platform) ||
	// iPad on iOS 13 detection
	(window.navigator.userAgent.includes('Mac') && 'ontouchend' in document);

// other helper functions
export const timeConverter = (value: string) => {
	const sec: number | string = parseInt(value, 10);
	let hours: number | string = Math.floor(sec / 3600);
	let minutes: number | string = Math.floor((sec - hours * 3600) / 60);
	let seconds: number | string = sec - hours * 3600 - minutes * 60;
	if (hours < 10) {
		hours = `0${hours}`;
	}
	if (minutes < 10) {
		minutes = `0${minutes}`;
	}
	if (seconds < 10) {
		seconds = `0${seconds}`;
	}
	const time = `${minutes}:${seconds}`;
	return time;
};

export const priceStringify = (num: string | number) => {
	let ans = String(num);
	for (let i = ans.length - 3; i > 0; i -= 3) {
		ans = `${ans.substring(0, i)},${ans.substring(i)}`;
	}
	return ans;
};
