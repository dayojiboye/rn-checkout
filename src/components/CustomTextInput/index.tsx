import {
	StyleSheet,
	TextInput,
	TextInputProps,
	TextStyle,
	TouchableOpacity,
	View,
	ViewStyle,
} from "react-native";
import React from "react";
import { StyleProp } from "react-native";
import { ThemeType } from "../../types";
import useStyles from "../../hooks/useStyles";
import Icon from "react-native-vector-icons/Feather";

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
} & TextInputProps;

export default function CustomTextInput({
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
	const [secureText, setSecureText] = React.useState<boolean>(true);

	const LeftIcon = leftIcon;
	const RightIcon = rightIcon;

	return (
		<View style={[styles.outerContainer, outerContainerStyle]}>
			<View style={[styles.container, containerStyle]}>
				{leftIcon && <LeftIcon {...leftIconProps} />}
				<TextInput
					ref={refInput}
					placeholder={placeholder}
					placeholderTextColor={theme.placeholder}
					spellCheck={false}
					cursorColor={theme.placeholder}
					selectionColor={theme.placeholder}
					style={[styles.textInput, inputStyle]}
					onChangeText={onChangeText}
					secureTextEntry={isPassword ? secureText : false}
					{...props}
				/>
				{isPassword && (
					<TouchableOpacity
						activeOpacity={0.8}
						style={styles.passwordContainer}
						onPress={() => {
							// refInput?.current?.focus();
							setSecureText(!secureText);
						}}
					>
						<Icon name={secureText ? "eye" : "eye-off"} size={20} color={theme.placeholder} />
					</TouchableOpacity>
				)}
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
			// paddingHorizontal: 32,
			backgroundColor: "transparent",
			borderRadius: 8,
		},
		passwordContainer: {
			height: "100%",
			justifyContent: "center",
			alignItems: "center",
			width: 50,
			backgroundColor: "transparent",
		},
	});
