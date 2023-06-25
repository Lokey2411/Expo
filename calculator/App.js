import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import CalculateTable from "./components/CalculateTable";
import { useState } from "react";

export default function App() {
	const [inputNumber, setInputNumber] = useState("0");
	const [firstNumber, setFirstNumber] = useState(0);
	const [mathCalc, setMathCalc] = useState("");
	const [result, setResult] = useState(0);
	const clear = () => {
		setInputNumber("0");
	};
	const isNumber = (str) => {
		return Number(str) === str;
	};
	const handleInputNumber = (number) => {
		if (isNumber(number))
			setInputNumber(
				`${
					inputNumber === "0" || inputNumber === "Math error" ? "" : inputNumber
				}${number}`
			);
		else {
			if (number !== "=") {
				setFirstNumber(Number(inputNumber));
				setMathCalc(number);
				clear();
			} else {
				switch (mathCalc) {
					case "+":
						setResult(firstNumber + Number(inputNumber));
						break;
					case "-":
						setResult(firstNumber - Number(inputNumber));
						break;
					case "*":
						setResult(firstNumber * Number(inputNumber));
						break;
					case "/":
						if (Number(inputNumber) != 0)
							setResult(firstNumber / Number(inputNumber));
						else setInputNumber("Math error");
						break;
					default:
						setResult(firstNumber);
						break;
				}
				setInputNumber(result);
				setFirstNumber(result);
			}
		}
	};

	return (
		<View style={{ margin: "auto" }}>
			<View style={styles.result}>
				<Text id="result">{inputNumber}</Text>
			</View>
			<CalculateTable onPressButton={handleInputNumber} />
			<TouchableOpacity
				onPress={() => {
					clear();
					setFirstNumber(0);
					setResult(0);
					setMathCalc("");
				}}
				style={{
					backgroundColor: "#f00",
					width: 150,
					marginLeft: 1,
					justifyContent: "center",
					alignItems: "center",
					paddingVertical: 10,
				}}>
				<Text style={{ color: "#fff", textAlign: "center" }}>AC</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	result: {
		backgroundColor: "#ff0",
		display: "flex",
		width: "77%",
		margin: "auto",
		marginLeft: 1,
		height: 50,
		marginTop: 50,
	},
});
