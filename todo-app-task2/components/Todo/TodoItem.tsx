import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native";
import React from "react";
import { mainColor, stylesMain } from "../../style/styleMain";
import { AntDesign } from "@expo/vector-icons";

export interface TodoItemProps {
	item: string | number;
	deleteBtnPress: any;
	id: number;
}

const TodoItem = (props: TodoItemProps) => {
	return (
		<View style={[stylesMain.centerHorizontal, styles.container]}>
			<TextInput style={styles.input}>{props.item}</TextInput>
			<TouchableOpacity
				style={styles.btn}
				onPress={() => props.deleteBtnPress(props.id)}>
				<AntDesign
					name="delete"
					size={24}
					color="white"
				/>
			</TouchableOpacity>
		</View>
	);
};

export default TodoItem;

const styles = StyleSheet.create({
	container: {
		backgroundColor: mainColor,
		width: "70%",
		marginLeft: "15%",
		padding: 5,
		marginVertical: 20,
	},
	input: {
		width: 200,
		color: "#fff",
	},
	btn: {
		backgroundColor: "#783d02",
		padding: 10,
	},
});
