import axios from "axios";
const URL = "https://moviesdb5.p.rapidapi.com/om";
const HEADERS = {
  "X-RapidAPI-Key": process.env.VITE_SOME_KEY,
  "X-RapidAPI-Host": process.env.VITE_HOST,
};
const movieAPI = {
  async fetchMovie(title: string) {
    const { data } = await axios.get(URL, {
      params: { t: title },
      headers: HEADERS,
    });
    return data;
  },
};

export default movieAPI;
