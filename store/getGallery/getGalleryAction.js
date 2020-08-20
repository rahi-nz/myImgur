import {
  GET_GALLERY_FAILURE,
  GET_GALLERY_REQUEST,
  GET_GALLERY_SUCCESS,
} from '../constants';
import request from '../request';
import { getGalleryServices } from './getGalleryService';

export const getGalleryAction = () => async (dispatch) => {
  dispatch({ type: GET_GALLERY_REQUEST });

  const response = await request.get(getGalleryServices());

  if (response.ok) {
    dispatch({ type: GET_GALLERY_SUCCESS, payload: response.data.data });
    return response;
  }

  dispatch({ type: GET_GALLERY_FAILURE });
  return false;
};
