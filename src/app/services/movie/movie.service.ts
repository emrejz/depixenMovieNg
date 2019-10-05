import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {}
  apiUrl: string = "http://www.omdbapi.com/?s=you&type=movie&page=";
  getMovies(pageCount: number) {
    return this.http.get(this.apiUrl + pageCount);
  }
}
