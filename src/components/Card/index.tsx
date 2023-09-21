import { StyleSheet, Text, View } from "react-native";
import React from "react";
import useStyles from "../../hooks/useStyles";
import { FormValues, ThemeType } from "../../types";
import Icon from "react-native-vector-icons/FontAwesome";

type Props = {
	formValues: FormValues;
};

export default function Card({ formValues }: Props) {
	const { styles, theme } = useStyles(createStyles);

	return (
		<View style={styles.container}>
			<View style={styles.absoluteCard} />
			<View style={[styles.absoluteCard, { top: -32, zIndex: 1, width: "80%", opacity: 0.8 }]} />
			<View style={styles.card}>
				<Icon name="credit-card" size={30} color={theme.charcoal} />
				<View style={styles.cardInfo}>
					<Text style={styles.infoLabel}>CARD NUMBER</Text>
					<Text
						style={[
							styles.infoValue,
							{ color: theme.charcoal, opacity: formValues.cardNumber ? 1 : 0.4 },
						]}
					>
						{formValues.cardNumber || "0000 0000 0000 0000"}
					</Text>
				</View>
				<View style={styles.row}>
					<View style={styles.cardInfo}>
						<Text style={styles.infoLabel}>EXPIRY</Text>
						<Text
							style={[styles.infoValue, { color: formValues.expiry ? theme.black : theme.fade }]}
						>
							{formValues.expiry || "MM/YY"}
						</Text>
					</View>
					<View style={styles.cardInfo}>
						<Text style={styles.infoLabel}>CVV</Text>
						<Text
							style={[
								styles.infoValue,
								{
									color: formValues.cvv ? theme.black : theme.fade,
									letterSpacing: -1,
									fontWeight: "600",
								},
							]}
						>
							{formValues.cvv.replace(/./g, "*") || "***"}
						</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const createStyles = (theme: ThemeType) =>
	StyleSheet.create({
		container: {
			position: "relative",
		},
		card: {
			backgroundColor: theme.white,
			shadowColor: "#777474",
			shadowOffset: {
				width: 0,
				height: 4,
			},
			shadowOpacity: 0.19,
			shadowRadius: 5.62,
			elevation: 6,
			zIndex: 3,
			borderRadius: 20,
			padding: 24,
			paddingBottom: 35,
			gap: 20,
		},
		absoluteCard: {
			position: "absolute",
			top: -16,
			width: "90%",
			alignSelf: "center",
			backgroundColor: theme.white,
			shadowColor: "#777474",
			shadowOffset: {
				width: 0,
				height: 4,
			},
			shadowOpacity: 0.19,
			shadowRadius: 5.62,
			elevation: 6,
			zIndex: 2,
			borderRadius: 20,
			opacity: 0.9,
			overflow: "hidden",
			height: 40,
		},
		cardInfo: {
			gap: 7,
			alignSelf: "flex-start",
		},
		infoLabel: {
			color: "grey",
			fontSize: 14,
			fontWeight: "300",
		},
		infoValue: {
			color: theme.text,
			fontWeight: "500",
			fontSize: 16,
		},
		row: {
			gap: 20,
			flexDirection: "row",
		},
	});
