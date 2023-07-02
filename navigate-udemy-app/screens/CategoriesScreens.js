import { FlatList, StyleSheet } from "react-native";
import React from "react";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTitle from "../components/CategoryGridTitle";

const renderCategoryItem = ({ item }) => {
	return <CategoryGridTitle {...item} />;
};

const CategoriesScreens = () => {
	return (
		<FlatList
			data={CATEGORIES}
			keyExtractor={(item) => item.id}
			renderItem={renderCategoryItem}
			numColumns={2}
		/>
	);
};

export default CategoriesScreens;

const styles = StyleSheet.create({});
