import { useSelector } from "react-redux";
import { Layout } from "../../components";

export const Home = () => {
	const inti = useSelector((store) => store.intialValue);
	console.log(inti);
	return (
		<Layout>
			<div className="flex flex-col w-full p-4 ">
				<h1 className="text-2xl font-semibold text-[#777]">Dashboard</h1>
				<div className="flex flex-wrap w-full gap-4 p-4 justify-center items-center">
					<div className="flex flex-col w-[15rem] h-[8rem] border rounded-lg shadow-lg justify-center items-center">
						<h2>Total Calories Burned</h2>
						<h2>200 calories</h2>
					</div>
					<div className="flex flex-col w-[15rem] h-[8rem] border rounded-lg shadow-lg justify-center items-center">
						<h2>Total Calories Consumned</h2>
						<h2>200 calories</h2>
					</div>
					<div className="flex flex-col w-[15rem] h-[8rem] border rounded-lg shadow-lg justify-center items-center">
						<h2>Total Calories Goal</h2>
						<h2>200 calories</h2>
					</div>
					<div className="flex flex-col w-[15rem] h-[8rem] border rounded-lg shadow-lg justify-center items-center">
						<h2>Remaining Calories to Goal</h2>
						<h2>200 calories</h2>
					</div>
				</div>
			</div>
		</Layout>
	);
};
