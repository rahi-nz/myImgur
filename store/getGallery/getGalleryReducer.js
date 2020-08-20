import {
  GET_GALLERY_FAILURE,
  GET_GALLERY_REQUEST,
  GET_GALLERY_SUCCESS,
} from '../constants';

const initialState = {
  loading: false,
  data: null,
  error: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Delete Application Request Cases
    case GET_GALLERY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_GALLERY_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case GET_GALLERY_FAILURE:
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
