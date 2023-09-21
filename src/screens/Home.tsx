import { StyleSheet, View } from "react-native";
import React from "react";
import CustomButton from "../components/CustomButton";
import { FormValues, RootStackParamList, ThemeType } from "../types";
import useStyles from "../hooks/useStyles";
import CustomStatusBar from "../components/CustomStatusBar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Card from "../components/Card";
import { creditCardMask, expiryMask, formHasErrors } from "../utils/helpers";
import MaskedTextInput from "../components/MaskedTextInput";
import CustomTextInput from "../components/CustomTextInput";
import Icon from "react-native-vector-icons/FontAwesome";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const defaultFormValues: FormValues = {
	cardNumber: "",
	cvv: "",
	expiry: "",
	email: "",
	pin: "",
};

export default function Home({ navigation }: Props) {
	const { styles, theme } = useStyles(createStyles);

	const [formValues, setFormValues] = React.useState<FormValues>(defaultFormValues);

	const handleChange = (name: string, value: string) => {
		setFormValues({
			...formValues,
			[name]: value,
		});
	};

	const isDisabled = formHasErrors(formValues);

	// Configure screen header inside component
	React.useEffect(() => {
		navigation.setOptions({
			title: "Checkout",
			headerTitleStyle: styles.headerTitleStyle,
			headerShadowVisible: false,
		});
	}, [navigation]);

	return (
		<>
			<CustomStatusBar />
			<KeyboardAwareScrollView
				style={{ flex: 1 }}
				contentContainerStyle={styles.container}
				keyboardShouldPersistTaps="handled"
			>
				<Card formValues={formValues} />
				<View style={styles.form}>
					<CustomTextInput
						autoCapitalize="none"
						keyboardType="email-address"
						placeholder="Email"
						leftIcon={Icon}
						leftIconProps={{ name: "envelope", color: theme.charcoal, width: 20, size: 20 }}
						onChangeText={(value) => handleChange("email", value)}
					/>
					<MaskedTextInput
						keyboardType="number-pad"
						placeholder="Card Number"
						leftIcon={Icon}
						leftIconProps={{ name: "credit-card", color: theme.charcoal, size: 20 }}
						value={formValues.cardNumber}
						maxLength={19}
						mask={creditCardMask}
						onChangeText={(unmasked) => handleChange("cardNumber", unmasked)}
					/>
					<View style={styles.formRow}>
						<MaskedTextInput
							keyboardType="numeric"
							placeholder="Valid thru"
							value={formValues.expiry}
							maxLength={5}
							mask={expiryMask}
							onChangeText={(unmasked) => {
								const value = unmasked.replace(/[^+0-9\/]/g, "");
								handleChange("expiry", value);
							}}
							outerContainerStyle={styles.formRowInput}
						/>
						<CustomTextInput
							keyboardType="numeric"
							placeholder="CVV"
							value={formValues.cvv}
							secureTextEntry
							maxLength={3}
							onChangeText={(value) => {
								const val = value.replace(/[^+0-9]/g, "");
								handleChange("cvv", val);
							}}
							outerContainerStyle={styles.formRowInput}
						/>
					</View>
					<CustomTextInput
						keyboardType="numeric"
						placeholder="PIN"
						leftIcon={Icon}
						leftIconProps={{ name: "lock", color: theme.charcoal, width: 20, size: 28 }}
						value={formValues.pin}
						secureTextEntry
						maxLength={4}
						onChangeText={(value) => {
							const val = value.replace(/[^+0-9]/g, "");
							handleChange("pin", val);
						}}
					/>
					<CustomButton label="Continue" style={styles.submitButton} disabled={isDisabled} />
				</View>
			</KeyboardAwareScrollView>
		</>
	);
}

const createStyles = (theme: ThemeType) =>
	StyleSheet.create({
		container: {
			paddingHorizontal: 20,
			paddingTop: 100,
			paddingBottom: 50,
		},
		headerTitleStyle: {
			fontSize: 16,
			fontWeight: "500",
		},
		form: {
			marginTop: 40,
			gap: 16,
		},
		formRow: {
			flexDirection: "row",
			gap: 16,
		},
		formRowInput: {
			flex: 1,
		},
		submitButton: {
			marginTop: 48,
		},
	});
