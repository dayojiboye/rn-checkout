import { darkTheme, lightTheme } from "../config/theme";

export type RootStackParamList = {
	Home: undefined;
	OTPScreen: undefined;
	SuccessScreen: undefined;
};

export type AppContextValue = {
	themeMode: string;
	isInitializing: boolean;
	toggleThemeMode: (value: string) => void;
	setInitApp: (value: boolean) => void;
};

export type FormValues = {
	cardNumber: string;
	expiry: string;
	cvv: string;
	email: string;
	pin: string;
};

export type ThemeType = typeof lightTheme | typeof darkTheme;
