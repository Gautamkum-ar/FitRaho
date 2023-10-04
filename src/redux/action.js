import axios from "axios";

export const LOADING = "Loading Data";
export const EXERCISE_LOAD_SUCCESS = "exercise load success";

export const fetchData = () => async (dispatch) => {
	console.log(process.env.REACT_APP_BASE_URL);
	try {
		dispatch({ type: LOADING });
		const response = await axios.get(`http://localhost:3005/v1/api/exercises`);
		dispatch({ type: EXERCISE_LOAD_SUCCESS, payload: response.data.data });
	} catch (error) {
		console.log(error);
	}
};

export const addExercise = () => async (dispatch) => {
	try {
		dispatch({ type: LOADING });

		const response = await axios.post("http://localhost:3005/v1/api");
	} catch (error) {}
};
