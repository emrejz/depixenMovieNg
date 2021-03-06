import { MovieInDetail } from "./../../models/movieInDetail";
import { MovieInList } from "./../../models/movieInList";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {}
  movies: MovieInList[] = [];
  movieDetailList: MovieInDetail[] = [];
  movieDetail: MovieInDetail;
  pageCount: number = 1;
  tryLoad: boolean = true;
  movieListUrl: string = "http://www.omdbapi.com/?s=you&type=movie&page=";
  movieDetailUrl: string = "http://www.omdbapi.com/?i=";
  error: Error;
  getMovies() {
    this.error = null;
    if (this.tryLoad) {
      this.tryLoad = false;
      this.http.get(this.movieListUrl + this.pageCount).subscribe(
        data => {
          this.pageCount++;
          this.tryLoad = true;
          this.movies.push(...data["Search"]);
        },
        err => {
          (this.error = err), (this.tryLoad = true);
        }
      );
    }
  }
  getMovie(id) {
    this.error = null;
    this.http.get<MovieInDetail>(this.movieDetailUrl + id).subscribe(
      data => {
        this.movieDetailList.push(data);
        this.movieDetail = data;
      },
      err => (this.error = err)
    );
  }
  getMovieDetail(id) {
    this.error = null;
    if (this.movieDetailList.length > 0) {
      let movie = this.movieDetailList.find(item => item.imdbID == id);
      if (movie) {
        this.movieDetail = movie;
      } else {
        this.getMovie(id);
      }
    } else this.getMovie(id);
  }
}
