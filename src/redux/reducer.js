import {
	EXERCISE_ADDED,
	EXERCISE_LOAD_SUCCESS,
	LOADING,
	REMOVE_EXERCISE,
} from "./action";

const initailState = {
	exerciseData: [],
	foodData: [],
	goalData: [],
	loading: false,
	error: false,
};

export const habitReducer = (state = initailState, { type, payload }) => {
	switch (type) {
		case LOADING: {
			return {
				...state,
				loading: true,
				error: false,
			};
		}
		case EXERCISE_LOAD_SUCCESS: {
			return {
				...state,
				loading: false,
				error: false,
				exerciseData: payload,
			};
		}
		case EXERCISE_ADDED: {
			return {
				...state,
				loading: false,
				error: false,
				exerciseData: [...state.exerciseData, payload],
			};
		}
		case REMOVE_EXERCISE: {
			return {
				...state,
				loading: false,
				error: false,
				exerciseData: state.exerciseData.filter((elms) => elms._id !== payload),
			};
		}
		default: {
			return state;
		}
	}
};
