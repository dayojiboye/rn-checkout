import { StyleProp, StyleSheet, Text, View, ViewStyle, Keyboard } from "react-native";
import React from "react";
import { ThemeType } from "../../types";
import useStyles from "../../hooks/useStyles";
import OTPTextView from "react-native-otp-textinput";

type Props = {
	style?: StyleProp<ViewStyle>;
	onChange: (text: string) => void;
	inputCount?: number;
	autoFocus?: boolean;
	onSuccess?: () => void;
};

export default function OtpInput({ style, onChange, inputCount = 4, autoFocus, onSuccess }: Props) {
	const { styles, theme } = useStyles(createStyles);

	return (
		<View style={[styles.container, style]}>
			<OTPTextView
				handleTextChange={onChange}
				inputCount={inputCount}
				autoFocus={autoFocus}
				tintColor={theme.puce}
				offTintColor={theme.muted}
				keyboardType="number-pad"
				secureTextEntry
				handleCellTextChange={(text, index) => {
					if (index === inputCount - 1 && text) {
						Keyboard.dismiss();
						onSuccess?.();
					}
				}}
				// @ts-ignore
				textInputStyle={{ color: theme.white }}
			/>
		</View>
	);
}

const createStyles = (theme: ThemeType) =>
	StyleSheet.create({
		container: {
			width: "100%",
		},
	});
