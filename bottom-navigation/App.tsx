import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import Home from "./screens/Home";
import Detail from "./screens/Detail";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();
export default function App() {
	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Tabs.Navigator initialRouteName="Home">
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
								width: 500,
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
								width: 500,
							},
							tabBarLabelStyle: {
								color: "#fff",
							},
						}}
					/>
				</Tabs.Navigator>
			</NavigationContainer>
		</View>
	);
}

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "blue",
		alignItems: "center",
		justifyContent: "center",
		borderWidth: 1,
	},
});
