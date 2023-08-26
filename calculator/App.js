import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Alert,
	TextInput,
} from "react-native";
import CalculateTable from "./components/CalculateTable";
import { useState } from "react";

const Component = () => {
	return (
		<View>
			<Text>Hello</Text>
		</View>
	);
};

export default function App() {
	const [inputNumber, setInputNumber] = useState("0");
	const [firstNumber, setFirstNumber] = useState(0);
	const [mathCalc, setMathCalc] = useState("");
	const [result, setResult] = useState(0);
	const clear = () => {
		setInputNumber("0");
	};
	const isNumber = (str) => {
		return Number(str) == str;
	};
	//[1]=>handle(1)
	const handleInputNumber = (number) => {
		if (isNumber(number))
			setInputNumber(
				`${
					inputNumber === "0" || inputNumber === "Math error" ? "" : inputNumber
				}${number}`
			);
		else {
			if (number !== "=") {
				setFirstNumber(Number(inputNumber)); // chờ nha
				setMathCalc(number); //chờ thầy bấm nốt
				setInputNumber("0");
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
	const [input, setInput] = useState("");
	return (
		<View style={{ margin: "auto" }}>
			<View style={styles.result}>
				<Text id="result">{inputNumber}</Text>
			</View>
			<TextInput
				placeholder=""
				value=""
				onChangeText={setInput}
			/>
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
