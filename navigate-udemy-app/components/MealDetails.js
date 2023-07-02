import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const MealDetails = (props) => {
	return (
		<View style={[styles.details, props.style]}>
			<Text style={[styles.detailsItem, props.textStyled]}>
				{props.duration} minutes
			</Text>
			<Text style={[styles.detailsItem, props.textStyled]}>
				{props.complexity?.toUpperCase()}
			</Text>
			<Text style={[styles.detailsItem, props.textStyled]}>
				{props.affordability?.toUpperCase()}
			</Text>
		</View>
	);
};

export default MealDetails;

const styles = StyleSheet.create({
	details: {
		flexDirection: "row",
		justifyContent: "center",
		padidng: 8,
		alignItems: "center",
	},
	detailsItem: {
		fontSize: 16,
		marginHorizontal: 10,
	},
});
