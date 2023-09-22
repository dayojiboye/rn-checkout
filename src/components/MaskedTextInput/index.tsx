import { StyleSheet, TextInput, TextStyle, View, ViewStyle } from "react-native";
import React from "react";
import { StyleProp } from "react-native";
import { ThemeType } from "../../types";
import useStyles from "../../hooks/useStyles";
import MaskInput, { MaskInputProps } from "react-native-mask-input";

type Props = {
	onChangeText: (text: string) => void;
	placeholder?: string;
	isPassword?: boolean;
	outerContainerStyle?: StyleProp<ViewStyle>;
	containerStyle?: StyleProp<ViewStyle>;
	inputStyle?: StyleProp<TextStyle>;
	leftIcon?: any;
	rightIcon?: any;
	leftIconProps?: any;
	rightIconProps?: any;
	error?: boolean | string;
} & MaskInputProps;

export default function MaskedTextInput({
	onChangeText,
	placeholder,
	isPassword = false,
	outerContainerStyle,
	containerStyle,
	inputStyle,
	leftIcon,
	rightIcon,
	leftIconProps,
	rightIconProps,
	...props
}: Props) {
	const { styles, theme } = useStyles(createStyles);
	const refInput = React.useRef<TextInput>(null);

	const LeftIcon = leftIcon;
	const RightIcon = rightIcon;

	return (
		<View style={[styles.outerContainer, outerContainerStyle]}>
			<View style={[styles.container, containerStyle]}>
				{leftIcon && <LeftIcon {...leftIconProps} />}
				<MaskInput
					ref={refInput}
					placeholder={placeholder}
					placeholderTextColor={theme.placeholder}
					spellCheck={false}
					cursorColor={theme.placeholder}
					selectionColor={theme.placeholder}
					style={[styles.textInput, inputStyle]}
					onChangeText={onChangeText}
					{...props}
				/>
				{rightIcon && <RightIcon {...rightIconProps} />}
			</View>
		</View>
	);
}

const createStyles = (theme: ThemeType) =>
	StyleSheet.create({
		outerContainer: {
			width: "100%",
		},
		container: {
			backgroundColor: theme.inputBg,
			borderRadius: 4,
			flexDirection: "row",
			alignItems: "center",
			width: "100%",
			height: 50,
			paddingHorizontal: 28,
			gap: 16,
		},
		textInput: {
			fontSize: 16,
			color: theme.text,
			flex: 1,
			height: "100%",
			backgroundColor: "transparent",
			borderRadius: 8,
		},
	});
