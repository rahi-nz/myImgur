// eslint-disable-next-line import/named
import { baseURL } from '../request';

export const getGalleryServices = (page, section, viral, dateRange) => `${baseURL}/gallery/${section}/viral/${dateRange}/${page}?showViral=${viral}&mature=true&album_previews=true`;
