import baseURL from '../request';

export const getGalleryServices = () => `${baseURL}/gallery/hot/viral/week/0?showViral=true&mature=true&album_previews=true`;
