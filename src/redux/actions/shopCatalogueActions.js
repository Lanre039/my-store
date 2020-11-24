import {
  FETCH_CATALOGUE_FAILURE,
  FETCH_CATALOGUE_START,
  FETCH_CATALOGUE_SUCCESS,
} from "../types";

let apiBaseUri = process.env.REACT_APP_API_BASE_URL;

export const fetchCatalogueStart = () => ({
  type: FETCH_CATALOGUE_START,
});

export const fetchCatalogueSuccess = (catalogue) => ({
  type: FETCH_CATALOGUE_SUCCESS,
  payload: catalogue,
});

export const fetchCatalogueFailure = (error) => ({
  type: FETCH_CATALOGUE_FAILURE,
  payload: error,
});

export const fetchCatalogue = () => (dispatch) => {
  dispatch(fetchCatalogueStart());

  fetch(`${apiBaseUri}/products`)
    .then((res) => res.json())
    .then((data) => {
      if (data) {
        dispatch(fetchCatalogueSuccess(data));
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch(fetchCatalogueFailure(error));
    });
};
