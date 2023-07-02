import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import CategoriesScreens from "./screens/CategoriesScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FavouriteScreen from "./screens/FavouriteScreen";
import { Entypo } from "@expo/vector-icons";
// import FavouriteContextProvider from "./store/context/redux-context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
	return (
		<Drawer.Navigator
			screenOptions={{
				headerStyle: {
					backgroundColor: "#f00",
				},
				headerTintColor: "#ff0",
				headerTitleAlign: "center",
				drawerContentStyle: {
					backgroundColor: "#b9ffb0",
				},
				drawerInactiveTintColor: "black",
				drawerActiveTintColor: "white",
				drawerActiveBackgroundColor: "#6b52ae",
			}}>
			<Drawer.Screen
				name="Categories"
				component={CategoriesScreens}
				options={{
					title: "All Categories",
					drawerIcon: (props) => (
						<Entypo
							name="list"
							size={props.size}
							color={props.color}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Favourites"
				component={FavouriteScreen}
				options={{
					title: "Favourite Meals",
					drawerIcon: (props) => (
						<Entypo
							name="star"
							size={props.size}
							color={props.color}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
};

export default function App() {
	return (
		<SafeAreaView style={{ backgroundColor: "#000", height: "100%" }}>
			<StatusBar style="dark" />
			{/* <FavouriteContextProvider> */}
			<Provider store={store}>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: {
								backgroundColor: "#f00",
							},
							headerTintColor: "#ff0",
							headerTitleAlign: "center",
							contentStyle: {
								backgroundColor: "#b9ffb0",
							},
						}}>
						<Stack.Screen
							name="Drawer"
							component={DrawerNavigator}
							options={{
								headerShown: false,
							}}
						/>
						<Stack.Screen
							name="Meals Overview"
							component={MealsOverviewScreen}
						/>
						<Stack.Screen
							name="Meals Detail"
							component={MealDetailScreen}
							options={{
								title: "About the Meal",
							}}
						/>
					</Stack.Navigator>
				</NavigationContainer>
				{/* </FavouriteContextProvider> */}
			</Provider>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({});
