import {
  getResult,
  getResultSuccess,
  getResultFailure,
} from 'redux-store/slices/mathApiSlice';
import { ApiError } from 'global/error';

const API_URL = 'https://numbersapi.p.rapidapi.com';
const API_HOST = 'numbersapi.p.rapidapi.com';
const API_KEY = '6de7487f10msh12b03609a4f96eap179a68jsnbb92ed4695b2';

function buildGETApiHeaders() {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Host': API_HOST,
      'X-RapidAPI-Key': API_KEY,
    },
  };
}

// Added just for a POST use case
// eslint-disable-next-line no-unused-vars
function buildPOSTApiHeaders(body) {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-RapidAPI-Host': API_HOST,
      'X-RapidAPI-Key': API_KEY,
    },
    body: JSON.stringify(body),
  };
}

function handleApiResponse(response) {
  switch (response.status) {
    case 200:
      return;
    case 401:
      throw new ApiError('The API returned a 401 error');
    case 502:
      throw new ApiError('The API returned a 502 bad gateway error');
    default:
      throw new Error(`${response.status}: ${response.statusText}`);
  }
}

export default function fetchMathFact(number = 1999) {
  return async (dispatch) => {
    dispatch(getResult());

    const requestOptions = buildGETApiHeaders();
    try {
      const response = await fetch(
        `${API_URL}/${number}/math?fragment=true&json=true`,
        requestOptions
      );
      handleApiResponse(response);
      const resultJson = await response.json();
      dispatch(getResultSuccess(resultJson));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
      dispatch(getResultFailure(error.message));
    }
  };
}
