import { FlatList, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealsItem from "../components/MealsList/MealsItem";
import { useNavigation } from "@react-navigation/native";
import MealsList from "../components/MealsList/MealsList";

const MealsOverviewScreen = ({ route }) => {
	const navigation = useNavigation();
	const catID = route.params.categoryID;
	const displayedMeals = MEALS.filter((item) => {
		return item.categoryIds.indexOf(catID) >= 0;
	});
	useLayoutEffect(() => {
		const categoryTitle = CATEGORIES.find((item) => item.id === catID).title;
		navigation.setOptions({
			title: categoryTitle,
		});
	}, [catID, navigation]);

	return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
