import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();
export default function App() {
	return (
		<NavigationContainer>
			<Tabs.Navigator
				initialRouteName="Home"
				screenOptions={{
					headerShown: false,
					tabBarStyle: {
						width: "100%",
					},
					tabBarActiveTintColor: "#fff",
					tabBarActiveBackgroundColor: "#000",
				}}>
				<Tabs.Screen
					name="Home"
					component={Home}
					options={{
						title: "",
						tabBarLabel: "Home",
						tabBarIcon: () => (
							<Entypo
								name="home"
								size={24}
								color="yellow"
							/>
						),
						tabBarStyle: {
							marginHorizontal: 10,
							backgroundColor: "blue",
							width: "100%",
						},
						tabBarLabelStyle: {
							color: "#fff",
						},
					}}
				/>
				<Tabs.Screen
					name="Detail"
					component={Detail}
					options={{
						title: "",
						tabBarLabel: "Detail",
						tabBarIcon: () => (
							<MaterialCommunityIcons
								name="card-account-details"
								size={24}
								color="yellow"
							/>
						),
						tabBarStyle: {
							marginHorizontal: 10,
							backgroundColor: "blue",
							width: "100%",
						},
						tabBarLabelStyle: {
							color: "#fff",
						},
					}}
				/>
			</Tabs.Navigator>
		</NavigationContainer>
	);
}

export const styles = StyleSheet.create({});
