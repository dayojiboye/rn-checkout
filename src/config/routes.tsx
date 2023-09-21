import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { RootStackParamList } from "../types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppRoutes() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false, gestureEnabled: true }}>
			<Stack.Screen name="Home" component={Home} />
		</Stack.Navigator>
	);
}
