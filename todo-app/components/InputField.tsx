import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

export interface InputFieldProps {
	onChangeText: any;
	addItem: any;
	inputValue: string;
}

const InputField = (props: InputFieldProps) => {
	return (
		<View style={styles.container}>
			<TextInput
				placeholder="input your todo item"
				style={styles.input}
				onChangeText={props.onChangeText}
				value={props.inputValue}
			/>
			<TouchableOpacity
				style={styles.btn}
				onPress={props.addItem}
			>
				<AntDesign
					name="pluscircleo"
					size={24}
					color="green"
				/>
			</TouchableOpacity>
		</View>
	);
};

export default InputField;

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		// padding: 20,
		margin: 4,
		justifyContent: "center",
		// marginVertical: 20,
		borderWidth: 1,
	},
	input: {
		flex: 1,
		padding: 10,
		margin: 10,
	},
	btn: {
		padding: 10,
		margin: 10,
	},
});
