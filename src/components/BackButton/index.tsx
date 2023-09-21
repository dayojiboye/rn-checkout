import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import React from "react";
import { ThemeType } from "../../types";
import useStyles from "../../hooks/useStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { HeaderBackButtonProps } from "@react-navigation/native-stack/lib/typescript/src/types";
import { useNavigation } from "@react-navigation/native";

type Props = {
	style?: StyleProp<ViewStyle>;
	iconColor?: string;
} & HeaderBackButtonProps;

export default function BackButton({ style, iconColor, ...props }: Props) {
	const navigation = useNavigation();
	const { styles, theme } = useStyles(createStyles);

	return (
		<TouchableOpacity
			style={[styles.container, style]}
			onPress={() => navigation.goBack()}
			{...props}
		>
			<Icon name="arrow-back-ios" size={25} color={iconColor || theme.black} />
		</TouchableOpacity>
	);
}

const createStyles = (theme: ThemeType) =>
	StyleSheet.create({
		container: {},
	});
