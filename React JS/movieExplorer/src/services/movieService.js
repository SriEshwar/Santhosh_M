import mockTrending from '../data/mockTrending';

export const fetchTrendingMovies = async () => {
  // Simulating API fetch
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockTrending);
    }, 300);
  });
};
