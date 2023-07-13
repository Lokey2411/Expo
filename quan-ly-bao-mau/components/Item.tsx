import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const imgSize = 50;
interface PropsData {
	background: string;
	avt: any;
	name: String;
	address: String;
	icon: string;
	exp: String;
	rate: Number;
	desc: String;
	price: String;
}

const Item = (props: PropsData) => {
	const [isPressed, setIsPressed] = useState(false);
	return (
		<TouchableOpacity onPress={() => setIsPressed(!isPressed)}>
			<ScrollView
				style={[
					styles.container,
					{ backgroundColor: isPressed ? "#FF1493" : "#f2f2f2" },
				]}>
				<View style={[styles.line1, styles.row]}>
					<View style={{ width: imgSize + 10, height: imgSize + 10 }}>
						<Image
							source={props.avt}
							style={styles.img}
						/>
					</View>
					<View style={{ width: 290 }}>
						<Text style={{ marginLeft: 5 }}>{props.name}</Text>
						<View style={[styles.row, {}]}>
							<EvilIcons
								name="location"
								size={24}
								color="black"
							/>
							<Text>{props.address}</Text>
						</View>
						<Text style={{ marginLeft: 5 }}>{props.exp}</Text>
					</View>
					<View>
						<View style={[styles.rating, styles.row]}>
							<Text style={{ marginHorizontal: 4 }}>
								{`${props.rate ? props.rate : 0}`}/5
							</Text>
							<FontAwesome
								name="star"
								size={20}
								color="orange"
							/>
						</View>
						<Text style={{ color: "#FF1493", marginTop: 10 }}>
							{props.price}
						</Text>
					</View>
				</View>
				<View>
					<Text>{props.desc}</Text>
				</View>
			</ScrollView>
		</TouchableOpacity>
	);
};

export default Item;

const styles = StyleSheet.create({
	container: {
		padding: 10,
		width: 450,
		borderRadius: 20,
		marginVertical: 10,
	},
	line1: {},
	row: {
		flexDirection: "row",
		justifyConentent: "space-between",
	},
	img: {
		width: imgSize,
		height: imgSize,
		borderRadius: imgSize,
	},
	rating: {
		backgroundColor: "#fff",
		borderRadius: 10,
		paddingHorizontal: 10,
		alignItems: "center",
		justifyContent: "center",
		height: 30,
	},
});
