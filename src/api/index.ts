import axios from "axios";
import { IMovie } from "pages/Home/interface";

const API = axios.create({
  baseURL: " https://imdb-api.com/en/API/Search/k_9iud22ie",
});

interface IResponse {
  results:IMovie
}

export const getMoviesByTitles = (title: string) =>
  API.get<IResponse>(`/${title}`);
