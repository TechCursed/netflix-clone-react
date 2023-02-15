const API_KEY = "901abbe5020bba05ab7d38f0087a095c";

const requests = {

    fetchTrending : `/trending/all/week?api_key=${API_KEY}`,
    fetchNetflixOriginals : `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated :  `movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
    fetchActionMovies : `/discover/movie?api_key=${API_KEY}&with_generes=28`,
    fetchComedyMovies : `/discover/movie?api_key=${API_KEY}&with_generes=35`,
    fetchHorrorMovies : `/discover/movie?api_key=${API_KEY}&with_generes=27`,
    fetchRomanceMovies : `/discover/movie?api_key=${API_KEY}&with_generes=10749`,
    fetchDocumentaries : `/discover/movie?api_key=${API_KEY}&with_generes=99`,

}

// https://api.themoviedb.org/3/discover/movie?api_key=901abbe5020bba05ab7d38f0087a095c&with_generes=27

export default requests;