import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TodoItem from "./TodoItem";

export interface TodoItemProps {
	deleteBtnPress: any;
	data: any;
}

const TodoList = (props: TodoItemProps) => {
	return (
		<FlatList
			data={props.data}
			renderItem={({ item }) => (
				<TodoItem
					item={item.text}
					deleteBtnPress={props.deleteBtnPress}
					id={item.id}
				/>
			)}
			keyExtractor={(item) => item.id}
		/>
	);
};

export default TodoList;

const styles = StyleSheet.create({});
