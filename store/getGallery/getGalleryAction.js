import {
  GET_GALLERY_FAILURE,
  GET_GALLERY_REQUEST,
  GET_GALLERY_SUCCESS,
} from '../constants';
// eslint-disable-next-line import/named
import { request } from '../request';
import { getGalleryServices } from './getGalleryService';

export const getGalleryAction = (filter, page, section, viral, dateRange) => async (dispatch) => {
  dispatch({ type: GET_GALLERY_REQUEST }, filter);

  const response = await request.get(getGalleryServices(page, section, viral, dateRange));
  const data = response.data.data.filter((el) => el.is_album);

  if (response.ok) {
    dispatch({ type: GET_GALLERY_SUCCESS, payload: { data, filter } });
    return response.data.data;
  }

  dispatch({ type: GET_GALLERY_FAILURE });
  return response;
};
