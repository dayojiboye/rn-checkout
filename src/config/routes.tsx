import React from "react";
import Home from "../screens/Home";
import { RootStackParamList } from "../types";
import OTPScreen from "../screens/OTPScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator<RootStackParamList>();

export default function AppRoutes() {
	return (
		<Stack.Navigator
			screenOptions={{
				headerBackTitleVisible: false,
				headerTitleAlign: "center",
				headerShadowVisible: false,
				headerTitleStyle: { fontSize: 16, fontWeight: "500" },
				headerLeftContainerStyle: { paddingLeft: 20 },
				headerRightContainerStyle: { paddingRight: 20 },
				headerMode: "screen",
			}}
		>
			<Stack.Screen name="Home" component={Home} />
			<Stack.Screen name="OTPScreen" component={OTPScreen} />
		</Stack.Navigator>
	);
}
