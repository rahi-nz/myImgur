import { baseURL } from '../request';

export const getGalleryServices = (page, section, viral, window) => `${baseURL}/gallery/${section}/viral/${window}/${page}?showViral=${viral}&mature=true&album_previews=true`;
