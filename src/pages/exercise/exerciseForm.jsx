import { useState } from "react";
import { Input } from "../../components";

export const ExerciseForm = ({ setToggle }) => {
	const [newExercise, setNewExercise] = useState({
		exerciseName: "",
		duration: 0,
		typeValue: 0,
		calories: 0,
	});
	
	return (
		<div className="flex justify-center items-center w-full fixed top-0 left-0 right-0 bottom-0 bg-[#dadada60]">
			<form
				onSubmit={(e) => e.preventDefault()}
				className="shadow-md flex flex-col p-4 relative gap-4 rounded-lg w-80 bg-white">
				<h1 className="text-xl flex justify-center items-center text-[#555]">
					Add New Exercise
				</h1>
				<Input
					label={"Exercise Name"}
					placeholder={"Exercise Name"}
					type={"text"}
					onChange={(e) =>
						setNewExercise({ ...newExercise, exerciseName: e.target.value })
					}
					value={newExercise.exerciseName}
				/>
				<Input
					label={"Duration (in Minutes)"}
					placeholder={"Duration in minutes"}
					type={"number"}
					onChange={(e) =>
						setNewExercise({ ...newExercise, duration: e.target.value })
					}
					value={newExercise.duration}
				/>
				<select
					className="border focuse:outline-none text-[#666]"
					onChange={(e) =>
						setNewExercise({
							...newExercise,
							calories: e.target.value * newExercise.duration,
						})
					}>
					<option value="0"> Excercise type</option>
					<option value="9.0">Endurance Exercise</option>
					<option value="6.0">Strength training</option>
					<option value="8.0">Balance Exercise</option>
					<option value="2.7">Flexibility Exercise</option>
				</select>

				<Input
					label={"Calories Burned"}
					placeholder={"Calories Burn"}
					type={"number"}
					readOnly
					value={parseInt(newExercise.calories)}
				/>

				<div className="flex justify-between mt-4 ">
					{" "}
					<button className="text-green-500">Add</button>
					<button className="text-red-400" onClick={() => setToggle(false)}>
						Discard
					</button>
				</div>
			</form>
		</div>
	);
};
