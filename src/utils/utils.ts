import defaultImgMovie from '../assets/images/fallback_movie.png';

export function addDefaultSrc(event) {
  event.target.src = defaultImgMovie;
  event.target.alt = 'image not found';
}

export const encodeURL = (str) => {
  return encodeURIComponent(str);
};

export const decodeURL = (str) => {
  return decodeURIComponent(str);
};
