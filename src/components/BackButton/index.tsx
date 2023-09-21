import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from "react-native";
import React from "react";
import { ThemeType } from "../../types";
import useStyles from "../../hooks/useStyles";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useNavigation } from "@react-navigation/native";

type Props = {
	style?: StyleProp<ViewStyle>;
	iconColor?: string;
};

export default function BackButton({ style, iconColor }: Props) {
	const navigation = useNavigation();
	const { styles, theme } = useStyles(createStyles);

	return (
		<TouchableOpacity style={[styles.container, style]} onPress={() => navigation.goBack()}>
			<Icon name="arrow-back-ios" size={25} color={iconColor || theme.black} />
		</TouchableOpacity>
	);
}

const createStyles = (theme: ThemeType) =>
	StyleSheet.create({
		container: {},
	});
