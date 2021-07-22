import axios from "axios";
import { IMovie } from "components/MoviesList/MovieCard/interface";

const API = axios.create({
  baseURL: " https://imdb-api.com/en/API",
});

const IMDBkey = "k_9iud22ie";

interface IResponse {
  results: IMovie[];
}

export const getMoviesByTitles = (title: string) =>
  API.get<IResponse>(`/SearchTitle/${IMDBkey}/${title}`);
