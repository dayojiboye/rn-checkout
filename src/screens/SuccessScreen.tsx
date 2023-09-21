import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootStackParamList, ThemeType } from "../types";
import { StackScreenProps } from "@react-navigation/stack";
import BackButton from "../components/BackButton";
import useStyles from "../hooks/useStyles";
import Icon from "react-native-vector-icons/Ionicons";
import CustomButton from "../components/CustomButton";
import CustomStatusBar from "../components/CustomStatusBar";

type Props = StackScreenProps<RootStackParamList>;

export default function SuccessScreen({ navigation }: Props) {
	const { styles, theme } = useStyles(createStyles);

	React.useEffect(() => {
		navigation.setOptions({
			title: "",
			headerLeft: (props) => <BackButton iconColor={theme.white} />,
			headerStyle: { backgroundColor: theme.charcoal },
			headerTitleStyle: { color: theme.white },
			headerBackTitleVisible: true,
		});
	}, [navigation]);

	return (
		<>
			<CustomStatusBar style="light" />
			<View style={styles.container}>
				<Text style={styles.headingText}>Congrats! 🎉</Text>
				<View style={styles.contentContainer}>
					<Icon name="checkmark-circle-sharp" color={theme.charcoal} size={120} />
					<View>
						<Text
							style={[
								styles.headingText,
								{ fontSize: 18, textAlign: "center", color: theme.text, marginBottom: 10 },
							]}
						>
							Thanks for purchasing
						</Text>
						<Text style={styles.text}>Your order will be shipped in 3-5 business days</Text>
					</View>
					<CustomButton label="Continue" style={styles.button} />
				</View>
			</View>
		</>
	);
}

const createStyles = (theme: ThemeType) =>
	StyleSheet.create({
		container: {
			paddingTop: 50,
			backgroundColor: theme.charcoal,
			flex: 1,
		},
		headingText: {
			color: theme.white,
			fontSize: 20,
			textAlign: "center",
			marginBottom: 100,
		},
		contentContainer: {
			backgroundColor: theme.white,
			borderTopLeftRadius: 50,
			borderTopRightRadius: 50,
			flex: 1,
			alignItems: "center",
			justifyContent: "space-between",
			paddingTop: 50,
			paddingBottom: 100,
		},
		text: {
			fontSize: 14,
			color: theme.placeholder,
			textAlign: "center",
			width: 200,
			fontWeight: "300",
		},
		button: {
			width: "80%",
		},
	});
