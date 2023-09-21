import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootStackParamList, ThemeType } from "../types";
import useStyles from "../hooks/useStyles";
import CustomStatusBar from "../components/CustomStatusBar";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BackButton from "../components/BackButton";
import OtpInput from "../components/OTPInput";
import { StackScreenProps } from "@react-navigation/stack";

type Props = StackScreenProps<RootStackParamList, "OTPScreen">;

export default function OTPScreen({ navigation }: Props) {
	const { styles, theme } = useStyles(createStyles);
	const [otp, setOtp] = React.useState<string | undefined>("");

	React.useEffect(() => {
		navigation.setOptions({
			title: "OTP Verification",
			headerLeft: (props) => <BackButton iconColor={theme.white} />,
			headerStyle: { backgroundColor: theme.charcoal },
			headerTitleStyle: { color: theme.white },
			headerBackTitleVisible: true,
		});
	}, [navigation]);

	return (
		<>
			<CustomStatusBar style="light" />
			<KeyboardAwareScrollView
				style={{ flex: 1, backgroundColor: theme.charcoal }}
				contentContainerStyle={styles.container}
				keyboardShouldPersistTaps="handled"
			>
				<Text style={styles.headingText}>Please enter OTP code</Text>
				<OtpInput autoFocus={true} onChange={(text) => setOtp(text)} style={{ marginTop: 48 }} />
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
	});
