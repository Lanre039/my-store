import {
  FETCH_CATALOGUE_START,
  FETCH_CATALOGUE_SUCCESS,
  FETCH_CATALOGUE_FAILURE,
} from "../types";

const INITIAL_STATE = {
  isFetching: false,
  collections: null,
  errorMessage: undefined,
};

const shopCatalogueReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_CATALOGUE_START:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_CATALOGUE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload,
      };
    case FETCH_CATALOGUE_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default shopCatalogueReducer;
