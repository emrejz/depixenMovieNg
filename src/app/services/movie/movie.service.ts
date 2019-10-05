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
  pageCount: number = 1;
  tryLoad: boolean = true;
  movieListUrl: string = "http://www.omdbapi.com/?s=you&type=movie&page=";
  movieDetailUrl: string = "http://www.omdbapi.com/?i=";
  getMovies() {
    if (this.tryLoad) {
      this.tryLoad = false;
      this.http.get(this.movieListUrl + this.pageCount).subscribe(data => {
        this.pageCount++;
        console.log("çalıştı");
        this.tryLoad = true;
        this.movies.push(...data["Search"]);
      });
    }
  }
  getMovieDetail(id) {
    return this.http.get(this.movieDetailUrl + id);
  }
}
