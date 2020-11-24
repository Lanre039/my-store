import {
  FETCH_CATALOGUE_FAILURE,
  FETCH_CATALOGUE_START,
  FETCH_CATALOGUE_SUCCESS,
} from "../types";

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

const apiBaseUri = "https://fakestoreapi.com";
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
