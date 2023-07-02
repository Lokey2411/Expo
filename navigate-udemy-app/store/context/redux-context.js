import { createContext, useState } from "react";

export const FavouriteContext = createContext({
	id: [],
	addFavourite: (id) => {},
	removeFavourite: (id) => {},
});

const FavouriteContextProvider = (props) => {
	const [favouriteMealsID, setFavouriteMealsID] = useState([]);

	const addFavourite = (id) => {
		setFavouriteMealsID((currentFavIDs) => [...currentFavIDs, id]);
	};

	const removeFavourite = (id) => {
		setFavouriteMealsID((currentFavIDs) =>
			currentFavIDs.filter((item) => item !== id)
		);
	};
	const value = {
		id: favouriteMealsID,
		addFavourite: addFavourite,
		removeFavourite: removeFavourite,
	};
	return (
		<FavouriteContext.Provider value={value}>
			{props.children}
		</FavouriteContext.Provider>
	);
};

export default FavouriteContextProvider;
