import { TouchableOpacity, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CategoryGridTitle = ({ title, color, id }) => {
	const navigation = useNavigation();
	return (
		<View style={styles.gridItem}>
			<TouchableOpacity
				style={styles.button}
				onPress={() =>
					navigation.navigate("Meals Overview", {
						categoryID: id,
					})
				}>
				<View style={[{ backgroundColor: color }, styles.innerContainer]}>
					<Text style={styles.title}>{title}</Text>
				</View>
			</TouchableOpacity>
		</View>
	);
};

export default CategoryGridTitle;

const styles = StyleSheet.create({
	gridItem: {
		flex: 1,
		margin: 16,
		height: 150,
		borderRadius: 8,
		elevation: 4,
		shadowColor: "black",
		shadowOpacity: 0.2,
		shadowRadius: 8,
		shadowOffset: { width: 8, height: 2 },
		overflow: "hidden",
	},
	button: {
		flex: 1,
	},
	innerContainer: {
		flex: 1,
		padding: 16,
		justifyContent: "center",
		alignItems: "center",
	},
	title: {
		fontWeight: "bold",
		fontSize: 18,
	},
});
