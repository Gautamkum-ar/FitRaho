import { useDispatch, useSelector } from "react-redux";
import { Layout } from "../../components";
import { useEffect, useState } from "react";
import { ExerciseForm } from "./exerciseForm";
import { fetchData } from "../../redux/action";

export const Exercise = () => {
	const [toggle, setToggle] = useState(false);
	const dispatch = useDispatch();
	const exerciseData = useSelector((state) => state.exerciseData);
	useEffect(() => {
		dispatch(fetchData());
	}, []);
	return (
		<Layout>
			<div className="flex flex-col p-4 ">
				<div className="flex w-full justify-between">
					<h1 className="text-2xl text-[#777] font-semibold">Exercises</h1>
					<button
						className="p-2 bg-slate-600 cursor-pointer text-white rounded-lg"
						onClick={() => setToggle(true)}>
						Add New Exercise
					</button>
				</div>
				{toggle && <ExerciseForm setToggle={setToggle} />}
				<div className="flex flex-wrap gap-4 mt-4">
					{exerciseData?.map((item) => (
						<div className="border w-72 h-36 rounded-md p-2 px-4 flex flex-col">
							<h2 className="text-xl font-bold">{item.name}</h2>
							<p>
								{" "}
								<b>Calories Burned:</b> {item.caloriesBurned}cal
							</p>
							<p>
								<b>Duration: </b>
								{item.duration}mins
							</p>
						</div>
					))}
				</div>
			</div>
		</Layout>
	);
};
