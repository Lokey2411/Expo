import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
} from "react-native";
import CalculateButton from "./Calculate";

const line = [
	[1, 2, 3, "+", "-"],
	[4, 5, 6, "*", "/"],
	[7, 8, 9, 0, "="],
];

const Line = ({ item, onPressButton }) => {
	return (
		<View style={styles.line}>
			<FlatList
				style={styles.line}
				data={item}
				renderItem={({ item }) => (
					<CalculateButton
						item={item}
						onPressButton={onPressButton}
					/>
				)}
				keyExtractor={(item) => item}
			/>
		</View>
	);
};

const CalculateTable = ({ onPressButton }) => {
	return (
		<View style={styles.container}>
			<FlatList
				data={line}
				renderItem={({ item }) => (
					<Line
						item={item}
						onPressButton={onPressButton}
					/>
				)}
				keyExtractor={(item, index) => index}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	line: {
		flexDirection: "row",
	},
});

export default CalculateTable;
