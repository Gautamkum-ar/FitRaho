import { EXERCISE_LOAD_SUCCESS } from "./action";

const initailState = {
	exerciseData: [],
	foodData: [],
	goalData: [],
};

export const habitReducer = (state = initailState, { type, payload }) => {
	switch (type) {
		case EXERCISE_LOAD_SUCCESS: {
			return {
				...state,
				exerciseData: payload,
			};
		}
		default: {
			return state;
		}
	}
};
