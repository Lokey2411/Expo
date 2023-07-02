import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import MealsItem from "./MealsItem";

const MealsList = (props) => {
	const RenderMealsItem = (itemData) => {
		return <MealsItem {...itemData.item} />;
	};

	return (
		<View style={styles.container}>
			<FlatList
				data={props.items}
				keyExtractor={(item) => item.id}
				renderItem={RenderMealsItem}
			/>
		</View>
	);
};

export default MealsList;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
});
