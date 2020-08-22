import { baseURL } from '../request';

export const getGalleryServices = (page) => `${baseURL}/gallery/hot/viral/week/${page}?showViral=true&mature=true&album_previews=true`;
