import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
export default function App() {
	const [number, setNumber] = useState(10);
	// const number = 10;
	const [color, setColor] = useState("#3b5998");
	return (
		<View style={styles.container}>
			<Text style={styles.title}> {number} </Text>
			<Text style={styles.color}>Odd</Text>
			<View style={styles.row}>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						// Handle button press
						setNumber(number - 1);
					}}>
					<Text style={styles.buttonText}> - </Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.button}
					onPress={() => {
						// Handle button press
						setNumber(number + 1);
					}}>
					<Text style={styles.buttonText}> + </Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		color: "#FFF",
		backgroundColor: "#3b5998",
		fontSize: 90,
	},
	color: {
		color: "#3b5998",
		fontSize: 30,
		fontWeight: "700",
		marginBottom: 25,
	},
	row: {
		flexDirection: "row",
		justifyContent: "space-between",
		width: 200,
		height: 200,
	},
	button: {
		borderWidth: 6,
		height: 50,
		borderRadius: 25,
		width: 50,
		borderColor: "#3b5998",
		textAlign: "center",
		paddingLeft: 4,
	},
	buttonText: {
		color: "#3b5998",
		fontSize: 30,
		lineHeight: 35,
		fontWeight: "800",
	},
});
