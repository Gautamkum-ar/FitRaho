import axios from "axios";

export const LOADING = "Loading Data";
export const ERROR = "Error";
export const EXERCISE_LOAD_SUCCESS = "exercise load success";
export const REMOVE_EXERCISE = "remove exercise";
export const EXERCISE_ADDED = "Exercise Added";

const baseURL = process.env.REACT_APP_BASE_URL;

export const fetchData = () => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.get(`${baseURL}/exercises`);

		if (response.data.success) {
			dispatch({ type: EXERCISE_LOAD_SUCCESS, payload: response.data.data });
		}
	} catch (error) {
		dispatch({ type: ERROR });
	}
};

export const addExercise = (newExercise) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });

		const response = await axios.post(`${baseURL}/exercises/add-exercise`, {
			...newExercise,
		});
		if (response.data.success) {
			dispatch({ type: EXERCISE_ADDED, payload: response.data.data });
		}
	} catch (error) {
		dispatch({ type: ERROR });
	}
};

export const removeExercise = (exerciseId) => async (dispatch) => {
	try {
		dispatch({ type: LOADING });
		const response = await axios.delete(`${baseURL}/exercises/${exerciseId}`);
		if (response.status === 204) {
			dispatch({ type: REMOVE_EXERCISE, payload: exerciseId });
		}
	} catch (error) {
		dispatch({ type: ERROR });
	}
};