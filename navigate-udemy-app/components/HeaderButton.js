import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

const HeaderButton = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress}>
			<Entypo {...props} />
		</TouchableOpacity>
	);
};

export default HeaderButton;

const styles = StyleSheet.create({});
