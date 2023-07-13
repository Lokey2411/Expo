import { FlatList, StatusBar, StyleSheet, Text, View } from "react-native";
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
		name: "Minh",
		exp: "5+ năm làm việc",
		rate: 4.8,
		desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti accusamus quia nam itaque nulla. Eius, dolorum ut veritatis rem culpa quae quibusdam ipsam incidunt. Mollitia debitis aliquam pariatur. Corrupti, dolorum?",
		icon: "location",
	},
];

export default function App() {
	return (
		<View style={styles.container}>
			<FlatList
				data={MockupData}
				renderItem={({ item }) => <Item {...item} />}
				keyExtractor={(item: any, index: any) => index}
			/>
			<StatusBar hidden={true} />
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
