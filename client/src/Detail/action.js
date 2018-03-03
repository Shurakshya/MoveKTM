import axios from 'axios';
import {ADD_COMMENT, ADD_COMMENT_ERROR, FETCH_SINGLE_APARTMENT, FETCH_SINGLE_APARTMENT_ERROR} from './constant';

const ROOT_URL = 'http://localhost:3001/api';

export const fetchSingleApartment = (id) => {
  const request = axios.get(`${ROOT_URL}/apartments/${id}`);
  return (dispatch) => {
    return request
      .then((response) => {
        const {data} = response.data;
        dispatch({
          type: FETCH_SINGLE_APARTMENT,
          payload: data
        })
      }).catch((err) => {
        dispatch({
          type: FETCH_SINGLE_APARTMENT_ERROR,
          payload: err.response
        })
      })
  }
}

export const addComment = (apartmentId, values) => {
  const request = axios.post(`${ROOT_URL}/apartments/${apartmentId}/comments`, values);
  return (dispatch) => {
    return request
      .then((response) => {
        const {data} = response.data;
        dispatch({
          type: ADD_COMMENT,
          payload: data
        });
        /* get updated apartment */
        return axios.get(`${ROOT_URL}/apartments/${apartmentId}`);
      }).then(res => {
        const updatedApartment = res.data.data;
        dispatch({
          type: FETCH_SINGLE_APARTMENT,
          payload: updatedApartment
        })
      }).catch((err) => {
        const {message} = err.response.data;
        dispatch({
          type: ADD_COMMENT_ERROR,
          payload: message
        })
      })
  }
}
