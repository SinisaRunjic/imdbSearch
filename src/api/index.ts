import axios from "axios";
import { IMovie } from "components/MoviesList/MovieCard/interface";
import { IMovieDetails } from "components/MoviesList/MovieCard/MovieDetails/interface";

const API = axios.create({
  baseURL: " https://imdb-api.com/en/API",
});

const IMDBkey = "k_zywvd1zb";

interface IResponse {
  results: IMovie[];
}

export const getMoviesByTitles = (title: string) =>
  API.get<IResponse>(`/SearchTitle/${IMDBkey}/${title}`);

export const getMovieById = (id: string) =>
  API.get<IMovieDetails>(`/Title/${IMDBkey}/${id}/FullActor,Posters,Ratings,`);
