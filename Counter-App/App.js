import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const kichCo = 50;

export default function App() {
	const [number, setNumber] = useState(0);
  function buttonPressed() {
    
  }
	const isOdd = number % 2 === 0 ? "even " : "odd";
	// let odd = null;
	// if (odd % 2 === 0) {
	// 	odd = "even";
	// } else odd = "odd";
	function buttonMinus() {}
	return (
		<View style={styles.container}>
			<View style={{ backgroundColor: "deepblue" }}>
				<Text>{number}</Text>
			</View>
			<Text>{isOdd}</Text>
			<View>
				<TouchableOpacity
					style={styles.roundedButton}
					onPress={buttonPressed}>
					<Text>-</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.roundedButton}>
					<Text>+</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	roundedButton: {
		width: kichCo,
		height: kichCo,
		borderRadius: kichCo / 2,
		lineHeight: kichCo,
		borderColor: "blue",
		borderWidth: 3,
	},
});
