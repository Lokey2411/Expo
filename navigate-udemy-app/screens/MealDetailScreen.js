import {
	Button,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	View,
} from "react-native";
import React, {
	// useContext
	useLayoutEffect,
} from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useNavigation } from "@react-navigation/native";
import HeaderButton from "../components/HeaderButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourite";
// import { FavouriteContext } from "../store/context/redux-context";

const MealDetailScreen = (props) => {
	// const favouriteMealsContext = useContext(FavouriteContext);
	const favouriteMealsIDs = useSelector((state) => state.favouriteMeals.ids);
	const dispatch = useDispatch();
	const id = props.route.params.mealID;
	const selectedMeal = MEALS.find((item) => item.id === id);
	const navigation = useNavigation();
	const mealsFavourite = favouriteMealsIDs.includes(id);
	const favouriteBtnHandle = () => {
		if (mealsFavourite) {
			// favouriteMealsContext.removeFavourite(id);
			dispatch(removeFavourite({ id: id }));
		} else {
			// favouriteMealsContext.addFavourite(id);
			dispatch(addFavourite({ id: id }));
		}
	};
	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => (
				<HeaderButton
					name={mealsFavourite ? "star" : "star-outlined"}
					size={36}
					color={"yellow"}
					onPress={favouriteBtnHandle}
				/>
			),
		});
	}, [navigation, favouriteBtnHandle]);
	return (
		<ScrollView style={styles.container}>
			<Image
				style={styles.image}
				source={{ uri: selectedMeal.imageUrl }}
			/>
			<Text style={styles.title}>{selectedMeal.title}</Text>
			<MealDetails
				{...selectedMeal}
				style={styles.detail}
				textStyled={styles.textStyled}
			/>
			<Text style={styles.title}>Ingredients</Text>
			{selectedMeal.ingredients.map((item) => (
				<Text
					style={styles.textStyled}
					key={item}>
					{item}
				</Text>
			))}
			<Text style={styles.title}>Steps</Text>
			{selectedMeal.steps.map((item, index) => (
				<Text
					key={item}
					style={[
						styles.textStyled,
						{ textAlign: "center", borderRadius: 12 },
					]}>
					{` Step ${index + 1}: ${item}`}
				</Text>
			))}
		</ScrollView>
	);
};

export default MealDetailScreen;

const styles = StyleSheet.create({
	container: {
		paddingBottom: 16,
	},
	image: {
		width: "90%",
		height: 200,
		borderRadius: 10,
		marginHorizontal: "5%",
		marginVertical: 10,
	},
	title: {
		fontWeight: "bold",
		margin: 8,
		textAlign: "center",
		fontSize: 20,
	},
	detail: {
		flexDirection: "column",
		textAlign: "left",
	},
	textStyled: {
		textAlign: "left",
		marginHorizontal: "10%",
		backgroundColor: "#47fced",
		paddingHorizontal: 8,
		marginVertical: 4,
		borderRadius: 8,
		paddingVertical: 8,
	},
});
