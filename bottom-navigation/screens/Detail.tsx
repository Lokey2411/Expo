import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Detail = () => {
	return (
		<View style={styles.container}>
			<Text>Detail</Text>
		</View>
	);
};

export default Detail;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "100%",
		backgroundColor: "blue",
		alignItems: "center",
		justifyContent: "center",
	},
});
