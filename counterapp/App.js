import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
// num++ => num = num + 1
// let size = 10;
// size = size + 1;
// const [size, setSize] = useState(10);
// muốn thay đổi giá trị: setSize(15);
export default function App() {
	const [size, setSize] = useState(10);
	const [align, setAlign] = useState("center");
	const [color, setColor] = useState("black");
	const maxSize = 12;
	const minSize = 2;
	return (
		<View style={[styles.container, {}]}>
			<View
				style={{
					backgroundColor: "#00000",
					width: "90%",
					height: 100,
					borderWidth: 1,
					paddingHorizontal: 20,
				}}>
				<Text
					style={{
						color: color,
						fontSize: size * 3,
						textAlign: align,
						lineHeight: 100,
					}}>
					Lokey's Counter App
				</Text>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginVertical: 10,
				}}>
				<TouchableOpacity
					style={{ width: 50, height: 50, borderRadius: 50, borderWidth: 1 }}
					onPress={() => {
						let newSize = size - 1;
						if (newSize < minSize) newSize = maxSize;
						setSize(newSize);
					}}>
					<Text style={{ textAlign: "center", lineHeight: 50 }}>-</Text>
				</TouchableOpacity>
				<Text style={{ marginHorizontal: 8 }}>{size}</Text>
				<TouchableOpacity
					style={{ width: 50, height: 50, borderRadius: 50, borderWidth: 1 }}
					onPress={() => {
						let newSize = size + 1;
						if (newSize > maxSize) newSize = minSize;
						setSize(newSize);
					}}>
					<Text style={{ textAlign: "center", lineHeight: 50 }}>+</Text>
				</TouchableOpacity>
			</View>
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					marginVertical: 10,
				}}>
				<TouchableOpacity
					style={{
						width: 50,
						height: 50,
						borderRadius: 25,
						borderWidth: 1,
						backgroundColor: color === "red" ? "red" : "#fff",
					}}
					onPress={() => {
						setColor("red");
					}}>
					<Text
						style={{
							textAlign: "center",
							lineHeight: 50,
							color: color === "red" ? "white" : "black",
						}}>
						Red
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						width: 50,
						height: 50,
						borderRadius: 50,
						borderWidth: 1,
						marginHorizontal: 10,
						backgroundColor: color === "green" ? "green" : "#fff",
					}}
					onPress={() => {
						setColor("green");
					}}>
					<Text
						style={{
							textAlign: "center",
							lineHeight: 50,
							color: color === "green" ? "white" : "black",
						}}>
						Green
					</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						width: 50,
						height: 50,
						borderRadius: 50,
						borderWidth: 1,
						backgroundColor: color === "black" ? "black" : "#fff",
					}}
					onPress={() => {
						setColor("black");
					}}>
					<Text
						style={{
							textAlign: "center",
							lineHeight: 50,
							color: color === "black" ? "white" : "black",
						}}>
						Black
					</Text>
				</TouchableOpacity>
			</View>

			<View style={{ flexDirection: "row" }}>
				<TouchableOpacity
					style={{ borderWidth: 1, borderRadius: 70, width: 70, height: 70 }}
					onPress={() => {
						setAlign("left");
					}}>
					<Text style={{ textAlign: "center", lineHeight: 70 }}>Left</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{
						borderWidth: 1,
						borderRadius: 70,
						width: 70,
						height: 70,
						marginHorizontal: 10,
					}}
					onPress={() => {
						setAlign("center");
					}}>
					<Text style={{ textAlign: "center", lineHeight: 70 }}>Center</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={{ borderWidth: 1, borderRadius: 70, width: 70, height: 70 }}
					onPress={() => {
						setAlign("right");
					}}>
					<Text style={{ textAlign: "center", lineHeight: 70 }}>Right</Text>
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
});
