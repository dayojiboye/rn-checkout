import Toast from "react-native-root-toast";
import { toastType } from "../enums";
import { Mask, formatWithMask } from "react-native-mask-input";
import { FormValues } from "../types";

export const showToast = (
	message: string,
	variation?: toastType,
	position: number = 60,
	duration: number = Toast.durations.LONG
) =>
	Toast.show(message, {
		duration,
		position,
		backgroundColor: variation === toastType.ERROR ? "red" : "green",
		textColor: "#fff",
		textStyle: { fontSize: 16 },
		shadow: false,
		animation: true,
	});

export const creditCardMask: Mask = [
	/\d/,
	/\d/,
	/\d/,
	/\d/,
	" ",
	[/\d/],
	[/\d/],
	[/\d/],
	[/\d/],
	" ",
	[/\d/],
	[/\d/],
	[/\d/],
	[/\d/],
	" ",
	/\d/,
	/\d/,
	/\d/,
	/\d/,
];

export const expiryMask: Mask = (text = "") => {
	const cleanText = text.replace(/\D+/g, "");

	let secondDigitMonthMask = /\d/;

	if (cleanText.charAt(0) === "0") {
		secondDigitMonthMask = /[1-9]/;
	}
	if (cleanText.charAt(0) === "1") {
		secondDigitMonthMask = /[012]/;
	}

	return [/[0-1]/, secondDigitMonthMask, "/", /\d/, /\d/, /\d/, /\d/];
};

export const emailValidator: RegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

export const formHasErrors = (formValues: FormValues): boolean => {
	const { email, cardNumber, expiry, cvv, pin } = formValues;
	if (
		Object.values(formValues).some((val) => !val) ||
		!email.trim().match(emailValidator) ||
		!cardNumber
			.trim()
			.replace(/\s+/g, "")
			.match(/\d{4} *\d{4} *\d{4} *\d{4}/) ||
		!expiry.trim().match(/^\d{2}\/\d{2}$/g) ||
		!cvv.trim().match(/^\d{3}$/) ||
		!pin.trim().match(/^\d{4}$/)
	) {
		return true;
	} else {
		return false;
	}
};

export const formatTextWithMask = (text: string, mask: Mask) => {
	const { obfuscated } = formatWithMask({
		text,
		mask,
	});

	return obfuscated;
};

// const value = unmasked
// 									.replace(/[^+0-9\/]/g, "")
// 									.replace(/^([1-9]\/|[2-9])$/g, "0$1/")
// 									.replace(/^(0[1-9]|1[0-2])$/g, "$1/")
// 									.replace(/^([0-1])([3-9])$/g, "0$1/$2")
// 									.replace(/^(0?[1-9]|1[0-2])([0-9]{2})$/g, "$1/$2")
// 									.replace(/^([0]+)\/|[0]+$/g, "0")
// 									.replace(/[^\d\/]|^[\/]*$/g, "")
// 									.replace(/\/\//g, "/")
