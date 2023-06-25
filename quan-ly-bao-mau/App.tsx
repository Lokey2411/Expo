import { FlatList, StyleSheet, Text, View } from "react-native";
import Item from "./components/Item";

const MockupData = [
	{
		price: "200k/ giờ",
		background: "pink",
		avt: require("./assets/icon.png"),
		address: "Location",
		name: "name",
		exp: "5+ năm làm việc",
		rate: 4.8,
		desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam exercitationem magnam est non sint perferendis! Dolore enim ex deleniti ea sit quos eum, adipisci rem necessitatibus, mollitia in quaerat obcaecati!",
		icon: "location",
	},
	{
		price: "200k/ giờ",
		background: "#f2f2f2",
		avt: require("./assets/icon.png"),
		address: "Location",
		name: "Viet",
		exp: "5+ năm làm việc",
		rate: 4.8,
		desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam exercitationem magnam est non sint perferendis! Dolore enim ex deleniti ea sit quos eum, adipisci rem necessitatibus, mollitia in quaerat obcaecati!",
		icon: "location",
	},
];

export default function App() {
	return (
		<View style={styles.container}>
			<FlatList
				data={MockupData}
				renderItem={({ item }) => <Item {...item} />}
				keyExtractor={(item) => item.name}
			/>
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
});
