import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import MealsList from "../components/MealsList/MealsList";
import { FavouriteContext } from "../store/context/redux-context";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";

const FavouriteScreen = () => {
	// const mealsFavouriteContext = useContext(FavouriteContext);
	const mealsFavouriteContext = useSelector(
		(state) => state.favouriteMeals.ids
	);
	const displayedMeals = MEALS.filter((meal) =>
		mealsFavouriteContext.includes(meal.id)
	);
	return displayedMeals.length === 0 ? (
		<View style={styles.container}>
			<Text style={styles.containerText}>You have no favourite meals</Text>
		</View>
	) : (
		<MealsList items={displayedMeals} />
	);
};

export default FavouriteScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	containerText: {
		fontWeight: 500,
		fontSize: 30,
		textTransform: "uppercase",
		textAlign: "center",
		lineHeight: 50,
	},
});
