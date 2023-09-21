import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { RootStackParamList } from "../types";
import OTPScreen from "../screens/OTPScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
	return (
		<Stack.Navigator
			screenOptions={{
				gestureEnabled: true,
				headerBackTitleVisible: false,
				headerTitleAlign: "center",
				headerShadowVisible: false,
				headerTitleStyle: { fontSize: 16, fontWeight: "500" },
			}}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="OTPScreen" component={OTPScreen} />
		</Stack.Navigator>
	);
}
