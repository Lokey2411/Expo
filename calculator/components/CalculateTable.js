import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	FlatList,
	TextInput,
} from "react-native";
import CalculateButton from "./Calculate";

const line = [
	[1, 2, 3, "-", "+"],
	[4, 5, 6, "*", "/"],
	[7, 8, 9, 0, "="],
];

const Line = ({ item, onPressButton }) => {
	return (
		<View style={styles.line}>
			{item.map((value, index) => (
				<CalculateButton
					item={value}
					onPressButton={onPressButton}
					key={index}
				/>
			))}
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
