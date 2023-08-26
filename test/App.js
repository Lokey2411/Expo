import { StatusBar } from "expo-status-bar";
import {
	Dimensions,
	SafeAreaView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from "react-native";

export default function App() {
	return (
		<View style={styles.container}>
			<View style={styles.flexBox}>
				<View style={{ backgroundColor: "yellow", padding: 16, width: 100 }}>
					<Text>A</Text>
				</View>
				<View
					style={{
						backgroundColor: "yellow",
						padding: 16,
						width: 100,
						// marginVertical: 20,
					}}>
					<Text>A</Text>
				</View>
				<View style={{ backgroundColor: "yellow", padding: 16, width: 100 }}>
					<Text>A</Text>
				</View>
			</View>
			<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		// alignItems: "center",
		backgroundColor: "blue",
	},
	flexBox: {
		// padding: 20,
		// width: "50%",
		alignItems: "center",
		flexDirection: "row",
		width: Dimensions.get("screen"),
	},
});
