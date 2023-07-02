import { Text, TouchableOpacity } from "react-native";

const CalculateButton = ({ item, onPressButton, color }) => {
	return (
		<TouchableOpacity
			style={{
				width: 59,
				height: 50,
				backgroundColor: "gray",
				margin: 1,
			}}
			onPress={() => {
				onPressButton(item);
			}}>
			<Text
				style={{
					textAlign: "center",
					width: "100%",
					margin: "auto",
					lineHeight: 50,
				}}>
				{item}
			</Text>
		</TouchableOpacity>
	);
};
export default CalculateButton;
