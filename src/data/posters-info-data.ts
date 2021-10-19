import movie_1 from '../assets/images/movie_1.png';
import movie_2 from '../assets/images/movie_2.png';
import movie_3 from '../assets/images/movie_3.png';
import movie_4 from '../assets/images/movie_4.png';
import movie_5 from '../assets/images/movie_5.png';
import movie_6 from '../assets/images/movie_6.png';

export interface PostersInfoDataTypes {
  id: number;
  title?: string;
  year?: string;
  genre?: string;
  poster?: string;
}

const postersInfoData: PostersInfoDataTypes[] = [
  {
    id: 1,
    title: 'Pulp Fiction',
    year: '2004',
    genre: 'Action & Adventure',
    poster: movie_1,
  },
  {
    id: 2,
    title: 'Bohemian Rhapsody',
    year: '2003',
    genre: 'Drama, Biography, Music',
    poster: movie_2,
  },
  {
    id: 3,
    title: 'Bill: Vol 2',
    year: '1994',
    genre: 'Oscar winning movie',
    poster: movie_3,
  },
  {
    id: 4,
    title: 'Avengers: War of Infinity',
    year: '2004',
    genre: 'Action & Adventure',
    poster: movie_4,
  },
  {
    id: 5,
    title: 'Inception',
    year: '2003',
    genre: 'Action & Adventure',
    poster: movie_5,
  },
  {
    id: 6,
    title: 'Reservoir dogs',
    year: '1994',
    genre: 'Oscar winning movie',
    poster: movie_6,
  },
];

export default postersInfoData;
