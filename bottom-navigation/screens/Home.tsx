import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
	return (
		<View style={styles.container}>
			<Text>Home</Text>
		</View>
	);
};

export default Home;

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
	},
});
