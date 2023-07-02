import {
	Image,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "../MealDetails";

const MealsItem = (props) => {
	const navigation = useNavigation();
	return (
		<View style={styles.mealItem}>
			<Pressable
				style={[]}
				android_ripple={{ color: "#ccc" }}
				onPress={() =>
					navigation.navigate("Meals Detail", {
						mealID: props.id,
					})
				}>
				<View>
					<Image
						source={{ uri: props.imageUrl }}
						style={styles.image}
					/>
					<Text style={styles.title}>{props.title}</Text>
				</View>
				<MealDetails {...props} />
			</Pressable>
		</View>
	);
};

export default MealsItem;

const styles = StyleSheet.create({
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		margin: 8,
	},
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: "hidden",
		backgroundColor: "white",
		padding: 8,
		elevation: 4,
	},
});
