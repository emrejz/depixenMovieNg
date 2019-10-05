import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {}
  movieListUrl: string = "http://www.omdbapi.com/?s=you&type=movie&page=";
  movieDetailUrl: string = "http://www.omdbapi.com/?i=";
  getMovies(pageCount: number) {
    return this.http.get(this.movieListUrl + pageCount);
  }
  getMovieDetail(id) {
    return this.http.get(this.movieDetailUrl + id);
  }
}
