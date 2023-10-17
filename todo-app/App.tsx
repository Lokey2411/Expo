import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import InputField from "./components/InputField";
import { useState } from "react";
import TodoList from "./components/Todo/TodoList";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
	const [todoList, setTodoList] = useState(new Array(0));
	const [todoInput, setTodoInput] = useState("");
	const addBtnPress = () => {
		if (todoInput)
			setTodoList([
				...todoList,
				{
					id: Math.random(),
					text: todoInput,
				},
			]);
		setTodoInput("");
	};
	const deleteItem = (id: any) => {
		let newArray = [...todoList];
		newArray = newArray.filter((item) => item.id !== id);
		setTodoList(newArray);
	};
	const clearItems = () => {
		setTodoList(new Array(0));
	};
	return (
		<SafeAreaView style={styles.container}>
			<InputField
				onChangeText={setTodoInput}
				addItem={addBtnPress}
				inputValue={todoInput}
			/>
			<TouchableOpacity
				style={{
					justifyContent: "center",
					alignItems: "center",
					// marginTop: -30,
					flexDirection: "row",
					backgroundColor: "red",
					width: "30%",
					marginLeft: "35%",
				}}
				onPress={clearItems}
			>
				<Text style={{ color: "#fff" }}>Clear</Text>
				<Ionicons
					name="nuclear"
					size={24}
					color="black"
					style={{ textAlign: "center" }}
				/>
			</TouchableOpacity>
			<TodoList
				data={todoList}
				deleteBtnPress={deleteItem}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fff",
		justifyContent: "center",
	},
});
