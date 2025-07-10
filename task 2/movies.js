const API_KEY = '4c48b44cee6e02ef0860e68ea7c8b515'; // Replace this
const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const endpoints = {
  trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
  topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}`,
  upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}`
};

function fetchAndDisplay(url, containerId) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById(containerId);
      container.innerHTML = "";

      data.results.forEach(movie => {
        const div = document.createElement("div");
        div.classList.add("movie");
        div.innerHTML = `
          <img src="${IMG_PATH + movie.poster_path}" alt="${movie.title}">
          <h3>${movie.title}</h3>
        `;
        container.appendChild(div);
      });
    })
    .catch(err => {
      console.error(`Error loading ${containerId}:`, err);
    });
}

fetchAndDisplay(endpoints.trending, "trending");
fetchAndDisplay(endpoints.topRated, "top-rated");
fetchAndDisplay(endpoints.upcoming, "upcoming");
