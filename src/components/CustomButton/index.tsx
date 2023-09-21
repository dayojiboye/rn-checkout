import {
	Text,
	TouchableOpacity,
	StyleProp,
	ViewStyle,
	TextStyle,
	TouchableOpacityProps,
	ActivityIndicator,
	GestureResponderEvent,
	StyleSheet,
} from "react-native";
import React from "react";
import { ThemeType } from "../../types";
import useStyles from "../../hooks/useStyles";

type Props = {
	disabled?: boolean;
	label: string;
	style?: StyleProp<ViewStyle>;
	labelStyle?: StyleProp<TextStyle>;
	activeOpacity?: number;
	onPress?: (event: GestureResponderEvent) => void;
	onLongPress?: (event: GestureResponderEvent) => void;
	leftIcon?: any;
	rightIcon?: any;
	iconProps?: any;
	isLoading?: boolean;
} & TouchableOpacityProps;

export default function CustomButton({
	disabled,
	label = "Button",
	style,
	labelStyle,
	activeOpacity = 0.8,
	onPress,
	leftIcon,
	rightIcon,
	iconProps,
	isLoading,
	onLongPress,
	...props
}: Props) {
	const { theme, styles } = useStyles(createStyles);
	const Icon = leftIcon ? leftIcon : rightIcon;

	return (
		<TouchableOpacity
			activeOpacity={activeOpacity}
			disabled={disabled || isLoading}
			style={[
				styles.buttonStyle,
				{ backgroundColor: disabled || isLoading ? theme.fade : theme.charcoal },
				style,
			]}
			onPress={onPress}
			onLongPress={onLongPress}
			{...props}
		>
			{isLoading ? (
				<ActivityIndicator size="small" color={theme.white} />
			) : (
				<>
					{leftIcon && <Icon {...iconProps} />}
					<Text style={[styles.labelStyle, labelStyle]}>{label}</Text>
					{rightIcon && <Icon {...iconProps} />}
				</>
			)}
		</TouchableOpacity>
	);
}

const createStyles = (theme: ThemeType) =>
	StyleSheet.create({
		buttonStyle: {
			width: "100%",
			height: 55,
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "row",
			gap: 3,
			borderRadius: 8,
		},
		labelStyle: {
			fontSize: 16,
			fontWeight: "500",
			color: theme.white,
		},
	});
