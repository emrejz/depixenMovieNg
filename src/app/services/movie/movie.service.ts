import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class MovieService {
  constructor(private http: HttpClient) {}
  apiUrl: string = "http://www.omdbapi.com/?s=game&type=movie&page=1";
  getMovies() {
    return this.http.get(this.apiUrl);
  }
}
