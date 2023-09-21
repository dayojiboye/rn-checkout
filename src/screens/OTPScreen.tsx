import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootStackParamList, ThemeType } from "../types";
import useStyles from "../hooks/useStyles";
import CustomStatusBar from "../components/CustomStatusBar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackButton from "../components/BackButton";
import OtpInput from "../components/OTPInput";
import { StackScreenProps } from "@react-navigation/stack";
import { useFocusEffect } from "@react-navigation/native";

type Props = StackScreenProps<RootStackParamList>;

export default function OTPScreen({ navigation }: Props) {
	const { styles, theme } = useStyles(createStyles);
	const [otp, setOtp] = React.useState<string | undefined>("");
	const [isLoading, setIsLoading] = React.useState<boolean>(false);

	React.useEffect(() => {
		navigation.setOptions({
			title: "OTP Verification",
			headerLeft: (props) => <BackButton iconColor={theme.white} />,
			headerStyle: { backgroundColor: theme.charcoal },
			headerTitleStyle: { color: theme.white },
			headerBackTitleVisible: true,
		});
	}, [navigation]);

	useFocusEffect(
		React.useCallback(() => {
			if (otp?.length === 4) {
				setTimeout(() => {
					navigation.replace("SuccessScreen");
					setIsLoading(false);
				}, 500);
			}
		}, [otp])
	);

	return (
		<>
			<CustomStatusBar style="light" />
			<KeyboardAwareScrollView
				style={{ flex: 1, backgroundColor: theme.charcoal }}
				contentContainerStyle={styles.container}
				keyboardShouldPersistTaps="handled"
			>
				<Text style={styles.headingText}>Please enter OTP code</Text>
				<OtpInput
					autoFocus={true}
					onChange={(text) => setOtp(text)}
					style={{ marginTop: 48 }}
					onSuccess={() => setIsLoading(true)}
				/>
				{isLoading ? (
					<ActivityIndicator animating color={theme.white} style={styles.loadingIndicator} />
				) : null}
			</KeyboardAwareScrollView>
		</>
	);
}

const createStyles = (theme: ThemeType) =>
	StyleSheet.create({
		container: {
			paddingHorizontal: 20,
			paddingVertical: 50,
		},
		headingText: {
			color: theme.white,
			fontSize: 20,
			textAlign: "center",
		},
		loadingIndicator: {
			marginTop: 20,
		},
	});
