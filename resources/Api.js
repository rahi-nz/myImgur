/* eslint import/named: off */
import { baseURL } from '../store/request';

// ****************** getAlbumService ****************** //
export const getAlbum = (id) => `${baseURL}/gallery/album/${id}`;
