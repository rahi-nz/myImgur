/* eslint import/named: off */
import { baseURL } from '../store/request';

// ****************** depositServices ****************** //
export const getGalleryImage = (id) => `${baseURL}/gallery/album/${id}`;
