import { ThemeType } from "../types";

const commonValues = {
	inputBg: "#F5F0D8",
	white: "#fff",
	black: "#000000",
	fade: "#ccc",
	placeholder: "rgb(151, 151, 153)",
	gunmetalGray: "#4D5339",
	puce: "#B19081",
	charcoal: "#4F7A83",
	muted: "#eee",
};

export const lightTheme = {
	...commonValues,
	background: "rgb(242, 242, 242)",
	text: "#000",
};

export const darkTheme = {
	...commonValues,
	background: "rgb(0, 0, 0)",
	text: "#fff",
};

const themeConfig = (value: string): ThemeType => {
	if (value === "dark") {
		return darkTheme;
	} else {
		return lightTheme;
	}
};

export default themeConfig;
