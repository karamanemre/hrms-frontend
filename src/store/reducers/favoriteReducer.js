import { ADD_TO_FAVORİTE, REMOVE_FROM_FAVORİTE } from "../actions/favoriteActions";
import { favoriteItems } from "../initialValues/favoriteItem";

const initialState = {
    favoriteItems: favoriteItems,
};

export default function favoriteReducer(state = initialState, { type, payload }) {
  switch (type) {
    case ADD_TO_FAVORİTE:
      let jobPosting = state.favoriteItems.find((c) => c.jobPosting.id === payload.id);
      if (jobPosting) {
        return {
          ...state,
          favoriteItems: state.favoriteItems.filter((c) => c.jobPosting.id !== payload.id)
        };
      } else {
        return {
          ...state,
          favoriteItems: [...state.favoriteItems, { quantity: 1, jobPosting: payload }],
        };
      }

    case REMOVE_FROM_FAVORİTE:
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter((c) => c.jobPosting.id !== payload.id),
      };
    default:
      return state;
  }
}