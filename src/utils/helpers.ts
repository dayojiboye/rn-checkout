import Toast from "react-native-root-toast";
import { toastType } from "../enums";
import { Mask } from "react-native-mask-input";
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

export const expiryMask: Mask = [/[0-1]/, /[0-2]/, "/", /[2]/, /[3-9]/];

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
